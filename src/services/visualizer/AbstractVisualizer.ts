import type {Observable} from 'rxjs';
import {EMPTY} from 'rxjs';
import Player from 'types/Player';

export default abstract class AbstractVisualizer<T> implements Player<T> {
    public autoplay = false;
    public loop = true;
    public muted = true;
    public volume = 0;
    abstract hidden: boolean;

    abstract appendTo(parentElement: HTMLElement): void;
    abstract load(src: T): void;
    abstract play(): void;
    abstract pause(): void;
    abstract stop(): void;
    abstract resize(width: number, height: number): void;

    observeCurrentTime(): Observable<number> {
        return EMPTY;
    }

    observeDuration(): Observable<number> {
        return EMPTY;
    }

    observeEnded(): Observable<void> {
        return EMPTY;
    }

    observeError(): Observable<unknown> {
        return EMPTY;
    }

    observePlaying(): Observable<void> {
        return EMPTY;
    }

    seek(): void {
        // do nothing
    }
}
