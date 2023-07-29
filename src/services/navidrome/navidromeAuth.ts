import type {Observable} from 'rxjs';
import {BehaviorSubject, distinctUntilChanged, filter, mergeMap} from 'rxjs';
import {Logger} from 'utils';
import {showNavidromeLoginDialog} from './components/NavidromeLoginDialog';
import navidromeApi from './navidromeApi';
import navidromeSettings from './navidromeSettings';

const logger = new Logger('navidromeAuth');

const accessToken$ = new BehaviorSubject('');
const isLoggedIn$ = new BehaviorSubject(false);

function observeAccessToken(): Observable<string> {
    return accessToken$.pipe(distinctUntilChanged());
}

export function isLoggedIn(): boolean {
    return isLoggedIn$.getValue();
}

export function observeIsLoggedIn(): Observable<boolean> {
    return isLoggedIn$.pipe(distinctUntilChanged());
}

export async function login(): Promise<void> {
    if (!isLoggedIn()) {
        logger.log('connect');
        try {
            const returnValue = await showNavidromeLoginDialog();
            if (returnValue) {
                const {userId, token, credentials} = JSON.parse(returnValue);
                navidromeSettings.userId = userId;
                navidromeSettings.credentials = credentials;
                setAccessToken(token);
            }
        } catch (err) {
            logger.error(err);
        }
    }
}

export async function logout(): Promise<void> {
    logger.log('disconnect');
    navidromeSettings.clear();
    setAccessToken('');
    isLoggedIn$.next(false);
}

function setAccessToken(token: string): void {
    navidromeSettings.token = token;
    accessToken$.next(token);
}

async function checkConnection(): Promise<boolean> {
    try {
        await navidromeApi.get('playlist', {_end: 1});
        return true;
    } catch (err) {
        logger.error(err);
        accessToken$.next(''); // Keep it in settings (it might be a temporary failure)
        return false;
    }
}

observeAccessToken()
    .pipe(
        filter((token) => token !== ''),
        mergeMap(() => checkConnection())
    )
    .subscribe(isLoggedIn$);

setAccessToken(navidromeSettings.token);