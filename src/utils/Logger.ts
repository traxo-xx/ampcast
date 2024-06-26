import type {Observer} from 'rxjs';

type AnyObserver = Partial<Observer<any>>;
type BasicConsole = Pick<Console, 'log' | 'warn' | 'error'>;

export default class Logger implements BasicConsole, AnyObserver {
    private static only = '';
    readonly log: BasicConsole['log'];
    readonly warn: BasicConsole['warn'];
    readonly error: BasicConsole['error'];
    readonly id: (id: string) => Logger;
    readonly rx: (id?: string) => Logger;
    readonly next?: () => void;
    readonly complete?: () => void;
    readonly only: () => this;

    constructor(id = '', rx = false, console: BasicConsole = window.console) {
        const prefix = id ? ` ${id}:` : '';

        const createId = (oldId: string, newId?: string) =>
            oldId && newId ? `${oldId}/${newId}` : newId || oldId;

        const log = (...args: any[]) => {
            if (id.startsWith(Logger.only)) {
                console.log(...args);
            }
        };

        // Basic console.
        this.log = (...args: any[]) => log(`##${prefix}`, ...args);
        this.warn = (...args: any[]) => log(`###${prefix}`, ...args);
        this.error = (err: unknown) => {
            if (id.startsWith(Logger.only)) {
                log(`####${prefix} ERROR`);
                console.error(err);
            }
        };

        // For RxJS debugging.
        if (rx) {
            this.next = this.log;
            this.complete = () => this.log('***complete***');
        }

        // For cloning.
        this.id = (newId: string) => new Logger(createId(id, newId), rx, console);
        this.rx = (newId?: string) => new Logger(createId(id, newId), true, console);

        // For less noise.
        this.only = () => {
            if (__dev__) {
                Logger.only = id;
            }
            return this;
        };
    }
}
