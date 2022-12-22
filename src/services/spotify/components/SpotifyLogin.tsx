import React from 'react';
import DevMode from 'components/Login/DevMode';
import LoginButton from 'components/Login/LoginButton';
import ServiceLink from 'components/Login/ServiceLink';
import spotify from '../spotify';

export default function SpotifyLogin() {
    return (
        <div className="panel">
            <div className="page login">
                <DevMode service={spotify} />
                <p>You need to be logged in to play music from Spotify.*</p>
                <LoginButton service={spotify} />
                <ServiceLink service={spotify} />
                <p>
                    <small>*Spotify Premium required.</small>
                </p>
            </div>
        </div>
    );
}