import React, {useCallback, useId, useRef, useState} from 'react';
import Dialog, {showDialog, DialogProps} from 'components/Dialog';
import ExternalLink from 'components/ExternalLink';
import Icon from 'components/Icon';
import DialogButtons from 'components/Dialog/DialogButtons';
import listenbrainzSettings from '../listenbrainzSettings';
import './ListenBrainzLoginDialog.scss';

export async function showListenBrainzLoginDialog(): Promise<string> {
    return showDialog(ListenBrainzLoginDialog, true);
}

export default function ListenBrainzLoginDialog(props: DialogProps) {
    const id = useId();
    const [errorMessage, setErrorMessage] = useState('');
    const dialogRef = useRef<HTMLDialogElement>(null);
    const userNameRef = useRef<HTMLInputElement>(null);
    const tokenRef = useRef<HTMLInputElement>(null);
    const profileUrl = 'https://listenbrainz.org/profile/';

    const login = useCallback(async () => {
        try {
            const userId = userNameRef.current!.value;
            const token = tokenRef.current!.value;

            listenbrainzSettings.userId = userId;

            setErrorMessage('');

            const response = await fetch(`https://api.listenbrainz.org/1/validate-token`, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Token ${token}`,
                },
            });

            if (!response.ok) {
                throw response;
            }

            const {valid, user_name} = await response.json();

            if (!valid) {
                throw Error('Invalid token.');
            }

            if (user_name !== userId) {
                throw Error('Token not valid for this user.');
            }

            dialogRef.current!.close(JSON.stringify({userId, token}));
        } catch (err: any) {
            console.error(err);
            setErrorMessage(err.message || err.statusText || 'Error');
        }
    }, []);

    const handleSubmit = useCallback(
        (event: React.FormEvent) => {
            event.preventDefault();
            login();
        },
        [login]
    );

    return (
        <Dialog
            {...props}
            className="listenbrainz-login-dialog login-dialog"
            title="Log in to ListenBrainz"
            ref={dialogRef}
        >
            <form method="dialog" onSubmit={handleSubmit}>
                <div className="table-layout">
                    <p>
                        <label htmlFor={`${id}-username`}>User:</label>
                        <input
                            type="text"
                            id={`${id}-username`}
                            autoFocus
                            required
                            spellCheck={false}
                            autoComplete="off"
                            autoCapitalize="off"
                            ref={userNameRef}
                        />
                    </p>
                    <p>
                        <label htmlFor={`${id}-token`}>Token:</label>
                        <input type="password" id={`${id}-token`} required ref={tokenRef} />
                    </p>
                </div>
                <p className="error">{errorMessage}</p>
                <p className="listenbrainz-link service-link">
                    <ExternalLink href={profileUrl}>
                        <Icon name="listenbrainz" />
                        {profileUrl}
                    </ExternalLink>
                </p>
                <DialogButtons submitText="Login" />
            </form>
        </Dialog>
    );
}
