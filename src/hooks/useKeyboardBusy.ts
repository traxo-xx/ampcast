import {useEffect, useState} from 'react';
import {fromEvent, merge, of, timer} from 'rxjs';
import {filter, map, debounce} from 'rxjs/operators';

export default function useKeyboardBusy(keyCodes?: readonly string[], debounceTime = 200): boolean {
    const [busy, setBusy] = useState(false);

    useEffect(() => {
        const isValidKey = (event: KeyboardEvent) => !keyCodes || keyCodes.includes(event.code);
        const fromKeyboardEvent = (type: string, busy: boolean) =>
            fromEvent<KeyboardEvent>(document, type, {capture: true}).pipe(
                filter(isValidKey),
                map(() => busy)
            );

        const busy$ = fromKeyboardEvent('keydown', true);
        const idle$ = fromKeyboardEvent('keyup', false);

        const subscription = merge(busy$, idle$)
            .pipe(debounce((busy) => (busy ? of(0) : timer(debounceTime))))
            .subscribe(setBusy);

        return () => subscription.unsubscribe();
    }, [keyCodes, debounceTime]);

    return busy;
}
