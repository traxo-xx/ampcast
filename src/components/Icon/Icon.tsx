import React from 'react';
import MediaServiceId from 'types/MediaServiceId';
import './Icon.scss';

// Icons adapted from https://fontawesome.com/
// and https://mui.com/components/material-icons
// and https://icons.getbootstrap.com/

export type ExternalSourceIconName = 'musicbrainz' | 'file' | 'blob';
export type MediaSourceIconName = MediaServiceId | ExternalSourceIconName;

export type IconName =
    | MediaSourceIconName
    | 'ampcast'
    | 'play'
    | 'pause'
    | 'stop'
    | 'volume'
    | 'muted'
    | 'prev'
    | 'next'
    | 'left'
    | 'right'
    | 'album'
    | 'locked'
    | 'unlocked'
    | 'info'
    | 'menu'
    | 'settings'
    | 'saved'
    | 'unsaved'
    | 'close'
    | 'audio'
    | 'video'
    | 'star'
    | 'star-fill'
    | 'heart'
    | 'heart-fill'
    | 'thumbs-up'
    | 'plus'
    | 'tick'
    | 'tick-fill'
    | 'folder'
    | 'folder-up'
    | 'file-audio'
    | 'file-video'
    | 'artist'
    | 'most-played'
    | 'recently-added'
    | 'playlist'
    | 'clock'
    | 'visualizer'
    | 'globe'
    | 'palette'
    | 'pin'
    | 'pin-fill'
    | 'link'
    | 'search'
    | 'playlist-add'
    | 'lookup-pending'
    | 'lookup-looking'
    | 'lookup-not-found';

export interface IconProps {
    name: IconName;
    className?: string;
}

export default function Icon({name, className = ''}: IconProps) {
    className = `icon icon-${name} ${className}`;

    switch (name) {
        case 'ampcast':
            return (
                <svg className={className} viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="8" strokeWidth="4" stroke="orange" fill="black" />
                    <circle cx="12" cy="12" r="2" stroke="none" fill="white" />
                </svg>
            );

        case 'play':
            return (
                <svg className={className} viewBox="0 0 448 512">
                    <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" />
                </svg>
            );

        case 'pause':
            return (
                <svg className={className} viewBox="0 0 448 512">
                    <path d="M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z" />
                </svg>
            );

        case 'stop':
            return (
                <svg className={className} viewBox="0 0 448 512">
                    <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z" />
                </svg>
            );

        case 'volume':
            return (
                <svg className={className} viewBox="0 0 16 16">
                    <path
                        className="high medium"
                        stroke="none"
                        d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z"
                    />
                    <path
                        className="medium"
                        stroke="none"
                        d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z"
                    />
                    <path
                        stroke="none"
                        d="M8.707 11.182A4.486 4.486 0 0 0 10.025 8a4.486 4.486 0 0 0-1.318-3.182L8 5.525A3.489 3.489 0 0 1 9.025 8 3.49 3.49 0 0 1 8 10.475l.707.707zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z"
                    />
                </svg>
            );

        case 'muted':
            return (
                <svg className={className} viewBox="0 0 16 16">
                    <path
                        stroke="none"
                        d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06zm7.137 2.096a.5.5 0 0 1 0 .708L12.207 8l1.647 1.646a.5.5 0 0 1-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 8 9.146 6.354a.5.5 0 1 1 .708-.708L11.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0z"
                    />
                </svg>
            );

        case 'prev':
            return (
                <svg className={className} viewBox="0 0 448 512">
                    <path d="M64 468V44c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12v176.4l195.5-181C352.1 22.3 384 36.6 384 64v384c0 27.4-31.9 41.7-52.5 24.6L136 292.7V468c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12z" />
                </svg>
            );

        case 'next':
            return (
                <svg className={className} viewBox="0 0 448 512">
                    <path d="M384 44v424c0 6.6-5.4 12-12 12h-48c-6.6 0-12-5.4-12-12V291.6l-195.5 181C95.9 489.7 64 475.4 64 448V64c0-27.4 31.9-41.7 52.5-24.6L312 219.3V44c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12z" />
                </svg>
            );

        case 'info':
            return (
                <svg className={className} viewBox="0 0 512 512">
                    <path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z" />
                </svg>
            );

        case 'menu':
            return (
                <svg className={className} viewBox="0 0 16 16">
                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                </svg>
            );

        case 'settings':
            return (
                <svg className={className} viewBox="0 0 512 512">
                    <path d="M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z" />
                </svg>
            );

        case 'album':
            return (
                <svg className={className} viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="8.5" strokeWidth="6.5" fill="none" />
                    <circle cx="12" cy="12" r="2" stroke="none" />
                </svg>
            );

        case 'locked':
            return (
                <svg className={className} viewBox="0 0 448 512" transform="scale(0.95)">
                    <path d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z" />
                </svg>
            );

        case 'unlocked':
            return (
                <svg className={className} viewBox="0 0 576 512" transform="scale(0.95)">
                    <path d="M423.5 0C339.5.3 272 69.5 272 153.5V224H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48h-48v-71.1c0-39.6 31.7-72.5 71.3-72.9 40-.4 72.7 32.1 72.7 72v80c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24v-80C576 68 507.5-.3 423.5 0z" />
                </svg>
            );

        case 'left':
            return (
                <svg className={className} viewBox="0 0 320 512">
                    <path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z" />
                </svg>
            );

        case 'right':
            return (
                <svg className={className} viewBox="0 0 320 512">
                    <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
                </svg>
            );

        case 'saved':
            return (
                <svg className={className} viewBox="0 0 448 512">
                    <path d="M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM224 416c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64zm96-304.52V212c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h228.52c3.183 0 6.235 1.264 8.485 3.515l3.48 3.48A11.996 11.996 0 0 1 320 111.48z" />
                </svg>
            );

        case 'unsaved':
            return (
                <svg className={className} viewBox="0 0 448 512">
                    <path d="M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM272 80v80H144V80h128zm122 352H54a6 6 0 0 1-6-6V86a6 6 0 0 1 6-6h42v104c0 13.255 10.745 24 24 24h176c13.255 0 24-10.745 24-24V83.882l78.243 78.243a6 6 0 0 1 1.757 4.243V426a6 6 0 0 1-6 6zM224 232c-48.523 0-88 39.477-88 88s39.477 88 88 88 88-39.477 88-88-39.477-88-88-88zm0 128c-22.056 0-40-17.944-40-40s17.944-40 40-40 40 17.944 40 40-17.944 40-40 40z" />
                </svg>
            );

        case 'close':
            return (
                <svg className={className} viewBox="0 0 64 64">
                    <path d="M 10.5,-0.5 C 12.1667,-0.5 13.8333,-0.5 15.5,-0.5C 20.7971,5.29805 26.2971,10.9647 32,16.5C 37.0314,10.303 42.5314,4.63636 48.5,-0.5C 49.8333,-0.5 51.1667,-0.5 52.5,-0.5C 55.8333,3.5 59.5,7.16667 63.5,10.5C 63.5,11.8333 63.5,13.1667 63.5,14.5C 57.7019,19.7971 52.0353,25.2971 46.5,31C 52.0353,36.7029 57.7019,42.2029 63.5,47.5C 63.5,49.1667 63.5,50.8333 63.5,52.5C 59.5,55.8333 55.8333,59.5 52.5,63.5C 50.8333,63.5 49.1667,63.5 47.5,63.5C 42.1604,57.8275 36.8271,52.1608 31.5,46.5C 25.479,51.8543 19.8123,57.521 14.5,63.5C 13.1667,63.5 11.8333,63.5 10.5,63.5C 7.16667,59.5 3.5,55.8333 -0.5,52.5C -0.5,50.8333 -0.5,49.1667 -0.5,47.5C 5.17254,42.1604 10.8392,36.8271 16.5,31.5C 10.8392,26.1729 5.17254,20.8396 -0.5,15.5C -0.5,13.8333 -0.5,12.1667 -0.5,10.5C 3.5,7.16667 7.16667,3.5 10.5,-0.5 Z" />
                </svg>
            );

        case 'audio':
            return (
                <svg className={className} viewBox="0 0 24 24">
                    <path
                        stroke="none"
                        d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"
                    />
                </svg>
            );

        case 'video':
            return (
                <svg className={className} viewBox="0 0 16 16">
                    <path
                        strokeWidth={0.5}
                        d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556v4.35zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H2z"
                    />
                </svg>
            );

        case 'star':
            return (
                <svg className={className} viewBox="0 0 576 512">
                    <path
                        className="icon-star-outer"
                        d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"
                    />
                    <path
                        className="icon-star-inner"
                        d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                    />
                </svg>
            );

        case 'star-fill':
            return (
                <svg className={className} viewBox="0 0 576 512">
                    <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
                </svg>
            );

        case 'heart':
            return (
                <svg className={className} viewBox="0 0 512 512">
                    <path d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z" />
                </svg>
            );

        case 'heart-fill':
            return (
                <svg className={className} viewBox="0 0 512 512">
                    <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                </svg>
            );

        case 'thumbs-up':
            return (
                <svg className={className} viewBox="0 0 512 512">
                    <path d="M466.27 286.69C475.04 271.84 480 256 480 236.85c0-44.015-37.218-85.58-85.82-85.58H357.7c4.92-12.81 8.85-28.13 8.85-46.54C366.55 31.936 328.86 0 271.28 0c-61.607 0-58.093 94.933-71.76 108.6-22.747 22.747-49.615 66.447-68.76 83.4H32c-17.673 0-32 14.327-32 32v240c0 17.673 14.327 32 32 32h64c14.893 0 27.408-10.174 30.978-23.95 44.509 1.001 75.06 39.94 177.802 39.94 7.22 0 15.22.01 22.22.01 77.117 0 111.986-39.423 112.94-95.33 13.319-18.425 20.299-43.122 17.34-66.99 9.854-18.452 13.664-40.343 8.99-62.99zm-61.75 53.83c12.56 21.13 1.26 49.41-13.94 57.57 7.7 48.78-17.608 65.9-53.12 65.9h-37.82c-71.639 0-118.029-37.82-171.64-37.82V240h10.92c28.36 0 67.98-70.89 94.54-97.46 28.36-28.36 18.91-75.63 37.82-94.54 47.27 0 47.27 32.98 47.27 56.73 0 39.17-28.36 56.72-28.36 94.54h103.99c21.11 0 37.73 18.91 37.82 37.82.09 18.9-12.82 37.81-22.27 37.81 13.489 14.555 16.371 45.236-5.21 65.62zM88 432c0 13.255-10.745 24-24 24s-24-10.745-24-24 10.745-24 24-24 24 10.745 24 24z" />
                </svg>
            );

        case 'tick':
            return (
                <svg className={className} viewBox="0 0 16 16">
                    <path
                        stroke="none"
                        d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
                    />
                    <path
                        stroke="none"
                        d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z"
                    />
                </svg>
            );

        case 'plus':
            return (
                <svg className={className} viewBox="0 0 16 16">
                    <path
                        stroke="none"
                        d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
                    />
                    <path
                        stroke="none"
                        d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
                    />
                </svg>
            );

        case 'tick-fill':
            return (
                <svg className={className} viewBox="0 0 16 16">
                    <path
                        stroke="none"
                        d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"
                    />
                </svg>
            );

        case 'artist':
            return (
                <svg className={className} viewBox="0 0 16 16">
                    <path
                        stroke="none"
                        d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                    />
                </svg>
            );

        case 'folder':
            return (
                <svg className={className} viewBox="0 0 24 24" transform="scale(1.25)">
                    <path
                        stroke="none"
                        d="m9.17 6 2 2H20v10H4V6h5.17M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"
                    />
                </svg>
            );

        case 'folder-up':
            return (
                <svg className={className} viewBox="0 0 24 24" transform="scale(1.25)">
                    <path
                        stroke="none"
                        d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V6h5.17l2 2H20v10zM9.41 14.42 11 12.84V17h2v-4.16l1.59 1.59L16 13.01 12.01 9 8 13.01l1.41 1.41z"
                    />
                </svg>
            );

        case 'file-audio':
            return (
                <svg className={className} strokeWidth="0" viewBox="0 0 16 16">
                    <path d="M14.341 3.579c-0.347-0.473-0.831-1.027-1.362-1.558s-1.085-1.015-1.558-1.362c-0.806-0.591-1.197-0.659-1.421-0.659h-7.75c-0.689 0-1.25 0.561-1.25 1.25v13.5c0 0.689 0.561 1.25 1.25 1.25h11.5c0.689 0 1.25-0.561 1.25-1.25v-9.75c0-0.224-0.068-0.615-0.659-1.421v0zM12.271 2.729c0.48 0.48 0.856 0.912 1.134 1.271h-2.406v-2.405c0.359 0.278 0.792 0.654 1.271 1.134v0zM14 14.75c0 0.136-0.114 0.25-0.25 0.25h-11.5c-0.135 0-0.25-0.114-0.25-0.25v-13.5c0-0.135 0.115-0.25 0.25-0.25 0 0 7.749-0 7.75 0v3.5c0 0.276 0.224 0.5 0.5 0.5h3.5v9.75z" />
                    <path d="M11.817 6.113c-0.116-0.095-0.268-0.133-0.415-0.104l-5 1c-0.234 0.047-0.402 0.252-0.402 0.49v3.701c-0.294-0.128-0.636-0.201-1-0.201-1.105 0-2 0.672-2 1.5s0.895 1.5 2 1.5 2-0.672 2-1.5v-3.59l4-0.8v2.091c-0.294-0.128-0.636-0.201-1-0.201-1.105 0-2 0.672-2 1.5s0.895 1.5 2 1.5 2-0.672 2-1.5v-5c0-0.15-0.067-0.292-0.183-0.387z" />
                </svg>
            );

        case 'file-video':
            return (
                <svg className={className} viewBox="0 0 16 16" strokeWidth="0">
                    <path d="M14.341 3.579c-0.347-0.473-0.831-1.027-1.362-1.558s-1.085-1.015-1.558-1.362c-0.806-0.591-1.197-0.659-1.421-0.659h-7.75c-0.689 0-1.25 0.561-1.25 1.25v13.5c0 0.689 0.561 1.25 1.25 1.25h11.5c0.689 0 1.25-0.561 1.25-1.25v-9.75c0-0.224-0.068-0.615-0.659-1.421v0 0zM12.271 2.729c0.48 0.48 0.856 0.912 1.134 1.271h-2.406v-2.405c0.359 0.278 0.792 0.654 1.271 1.134v0 0zM14 14.75c0 0.136-0.114 0.25-0.25 0.25h-11.5c-0.135 0-0.25-0.114-0.25-0.25v-13.5c0-0.135 0.115-0.25 0.25-0.25 0 0 7.749-0 7.75 0v3.5c0 0.276 0.224 0.5 0.5 0.5h3.5v9.75z" />
                    <path d="M4 8h5v5h-5v-5z" />
                    <path d="M9 10l3-2v5l-3-2z" />
                </svg>
            );

        case 'most-played':
            return (
                <svg className={className} viewBox="0 0 16 16">
                    <path
                        stroke="none"
                        d="M2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3zm2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1zm2.765 5.576A.5.5 0 0 0 6 7v5a.5.5 0 0 0 .765.424l4-2.5a.5.5 0 0 0 0-.848l-4-2.5z"
                    />
                    <path
                        stroke="none"
                        d="M1.5 14.5A1.5 1.5 0 0 1 0 13V6a1.5 1.5 0 0 1 1.5-1.5h13A1.5 1.5 0 0 1 16 6v7a1.5 1.5 0 0 1-1.5 1.5h-13zm13-1a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.5-.5h-13A.5.5 0 0 0 1 6v7a.5.5 0 0 0 .5.5h13z"
                    />
                </svg>
            );

        case 'clock':
            return (
                <svg className={className} viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z" />
                </svg>
            );

        case 'globe':
            return (
                <svg className={className} viewBox="0 0 16 16">
                    <path
                        stroke="none"
                        d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332zM8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5H4.51zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008h2.49zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z"
                    />
                </svg>
            );

        case 'visualizer':
            return (
                <svg className={className} viewBox="0 0 16 16">
                    <path
                        stroke="none"
                        d="M4 11H2v3h2v-3zm5-4H7v7h2V7zm5-5v12h-2V2h2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-2zM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm-5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3z"
                    />
                </svg>
            );

        case 'palette':
            return (
                <svg className={className} viewBox="0 0 16 16">
                    <path
                        stroke="none"
                        d="M8 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm4 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM5.5 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
                    />
                    <path
                        stroke="none"
                        d="M16 8c0 3.15-1.866 2.585-3.567 2.07C11.42 9.763 10.465 9.473 10 10c-.603.683-.475 1.819-.351 2.92C9.826 14.495 9.996 16 8 16a8 8 0 1 1 8-8zm-8 7c.611 0 .654-.171.655-.176.078-.146.124-.464.07-1.119-.014-.168-.037-.37-.061-.591-.052-.464-.112-1.005-.118-1.462-.01-.707.083-1.61.704-2.314.369-.417.845-.578 1.272-.618.404-.038.812.026 1.16.104.343.077.702.186 1.025.284l.028.008c.346.105.658.199.953.266.653.148.904.083.991.024C14.717 9.38 15 9.161 15 8a7 7 0 1 0-7 7z"
                    />
                </svg>
            );

        case 'pin':
            return (
                <svg className={className} viewBox="0 0 24 24" transform="scale(1.125)">
                    <path
                        stroke="none"
                        d="M14 4v5c0 1.12.37 2.16 1 3H9c.65-.86 1-1.9 1-3V4h4m3-2H7c-.55 0-1 .45-1 1s.45 1 1 1h1v5c0 1.66-1.34 3-3 3v2h5.97v7l1 1 1-1v-7H19v-2c-1.66 0-3-1.34-3-3V4h1c.55 0 1-.45 1-1s-.45-1-1-1z"
                    />
                </svg>
            );

        case 'pin-fill':
            return (
                <svg className={className} viewBox="0 0 24 24" transform="scale(1.125)">
                    <path
                        stroke="none"
                        fillRule="evenodd"
                        d="M16 9V4h1c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1h1v5c0 1.66-1.34 3-3 3v2h5.97v7l1 1 1-1v-7H19v-2c-1.66 0-3-1.34-3-3z"
                    />
                </svg>
            );

        case 'link':
            return (
                <svg className={className} viewBox="0 0 512 512">
                    <path
                        stroke="none"
                        d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"
                    />
                </svg>
            );

        case 'search':
            return (
                <svg className={className} viewBox="0 0 16 16" transform="scale(0.875)">
                    <path
                        stroke="none"
                        d="M15.504 13.616l-3.79-3.223c-0.392-0.353-0.811-0.514-1.149-0.499 0.895-1.048 1.435-2.407 1.435-3.893 0-3.314-2.686-6-6-6s-6 2.686-6 6 2.686 6 6 6c1.486 0 2.845-0.54 3.893-1.435-0.016 0.338 0.146 0.757 0.499 1.149l3.223 3.79c0.552 0.613 1.453 0.665 2.003 0.115s0.498-1.452-0.115-2.003zM6 10c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"
                    />
                </svg>
            );

        case 'playlist-add':
            return (
                <svg className={className} viewBox="0 0 24 24">
                    <path
                        stroke="none"
                        d="M14 10H3v2h11v-2zm0-4H3v2h11V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM3 16h7v-2H3v2z"
                    />
                </svg>
            );

        case 'recently-added':
            return (
                <svg className={className} viewBox="0 0 384 512">
                    <path d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48z" />
                    <rect
                        x="177"
                        y="220"
                        width="40"
                        height="210"
                        strokeWidth="20"
                        strokeLinejoin="round"
                    />
                    <rect
                        x="87"
                        y="310"
                        width="210"
                        height="40"
                        strokeWidth="20"
                        strokeLinejoin="round"
                    />
                </svg>
            );

        case 'playlist':
            return (
                <svg className={className} viewBox="0 0 512 512">
                    <path d="M88 48C101.3 48 112 58.75 112 72V120C112 133.3 101.3 144 88 144H40C26.75 144 16 133.3 16 120V72C16 58.75 26.75 48 40 48H88zM480 64C497.7 64 512 78.33 512 96C512 113.7 497.7 128 480 128H192C174.3 128 160 113.7 160 96C160 78.33 174.3 64 192 64H480zM480 224C497.7 224 512 238.3 512 256C512 273.7 497.7 288 480 288H192C174.3 288 160 273.7 160 256C160 238.3 174.3 224 192 224H480zM480 384C497.7 384 512 398.3 512 416C512 433.7 497.7 448 480 448H192C174.3 448 160 433.7 160 416C160 398.3 174.3 384 192 384H480zM16 232C16 218.7 26.75 208 40 208H88C101.3 208 112 218.7 112 232V280C112 293.3 101.3 304 88 304H40C26.75 304 16 293.3 16 280V232zM88 368C101.3 368 112 378.7 112 392V440C112 453.3 101.3 464 88 464H40C26.75 464 16 453.3 16 440V392C16 378.7 26.75 368 40 368H88z" />
                </svg>
            );

        case 'file':
        case 'blob':
            return (
                <svg className={className} viewBox="0 0 448 512" transform="scale(0.875)">
                    <path
                        fill="#00cccc"
                        d="M448 73.143v45.714C448 159.143 347.667 192 224 192S0 159.143 0 118.857V73.143C0 32.857 100.333 0 224 0s224 32.857 224 73.143zM448 176v102.857C448 319.143 347.667 352 224 352S0 319.143 0 278.857V176c48.125 33.143 136.208 48.572 224 48.572S399.874 209.143 448 176zm0 160v102.857C448 479.143 347.667 512 224 512S0 479.143 0 438.857V336c48.125 33.143 136.208 48.572 224 48.572S399.874 369.143 448 336z"
                    />
                </svg>
            );

        case 'apple':
            return (
                // From: https://github.com/Remix-Design/RemixIcon
                <svg
                    className={className}
                    viewBox="0 0 24 24"
                    transform="scale(1.1) translate(0,-1)"
                >
                    <path
                        fillRule="nonzero"
                        d="M11.624 7.222c-.876 0-2.232-.996-3.66-.96-1.884.024-3.612 1.092-4.584 2.784-1.956 3.396-.504 8.412 1.404 11.172.936 1.344 2.04 2.856 3.504 2.808 1.404-.06 1.932-.912 3.636-.912 1.692 0 2.172.912 3.66.876 1.512-.024 2.472-1.368 3.396-2.724 1.068-1.56 1.512-3.072 1.536-3.156-.036-.012-2.94-1.128-2.976-4.488-.024-2.808 2.292-4.152 2.4-4.212-1.32-1.932-3.348-2.148-4.056-2.196-1.848-.144-3.396 1.008-4.26 1.008zm3.12-2.832c.78-.936 1.296-2.244 1.152-3.54-1.116.048-2.46.744-3.264 1.68-.72.828-1.344 2.16-1.176 3.432 1.236.096 2.508-.636 3.288-1.572z"
                    />
                </svg>
            );

        case 'plex':
            return (
                <svg className={className} viewBox="0 0 122.88 122.88">
                    <path
                        className="icon-plex-outer"
                        d="M18.43,0h86.02c10.18,0,18.43,8.25,18.43,18.43v86.02c0,10.18-8.25,18.43-18.43,18.43H18.43 C8.25,122.88,0,114.63,0,104.45l0-86.02C0,8.25,8.25,0,18.43,0L18.43,0z"
                    />
                    <polygon
                        className="icon-plex-inner"
                        points="61.44,16.8 35.52,16.8 61.44,61.44 35.52,106.08 61.44,106.08 87.36,61.44 61.44,16.8"
                    />
                </svg>
            );

        case 'jellyfin':
            return (
                <svg className={className} viewBox="0 0 512 512">
                    <defs>
                        <linearGradient
                            id="jellyfin-linear-gradient"
                            gradientUnits="userSpaceOnUse"
                            x1="110.25"
                            y1="213.3"
                            x2="496.14"
                            y2="436.09"
                        >
                            <stop offset="0" style={{stopColor: '#aa5cc3'}} />
                            <stop offset="1" style={{stopColor: '#00a4dc'}} />
                        </linearGradient>
                    </defs>
                    <path d="M256,201.6c-20.4,0-86.2,119.3-76.2,139.4s142.5,19.9,152.4,0S276.5,201.6,256,201.6z" />
                    <path d="M256,23.3c-61.6,0-259.8,359.4-229.6,420.1s429.3,60,459.2,0S317.6,23.3,256,23.3z M406.5,390.8c-19.6,39.3-281.1,39.8-300.9,0s110.1-275.3,150.4-275.3S426.1,351.4,406.5,390.8z" />
                </svg>
            );

        case 'spotify':
            return (
                <svg className={className} viewBox="0 0 168 168">
                    <path
                        stroke="none"
                        d="m83.996 0.277c-46.249 0-83.743 37.493-83.743 83.742 0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l0.001-0.004zm38.404 120.78c-1.5 2.46-4.72 3.24-7.18 1.73-19.662-12.01-44.414-14.73-73.564-8.07-2.809 0.64-5.609-1.12-6.249-3.93-0.643-2.81 1.11-5.61 3.926-6.25 31.9-7.291 59.263-4.15 81.337 9.34 2.46 1.51 3.24 4.72 1.73 7.18zm10.25-22.805c-1.89 3.075-5.91 4.045-8.98 2.155-22.51-13.839-56.823-17.846-83.448-9.764-3.453 1.043-7.1-0.903-8.148-4.35-1.04-3.453 0.907-7.093 4.354-8.143 30.413-9.228 68.222-4.758 94.072 11.127 3.07 1.89 4.04 5.91 2.15 8.976v-0.001zm0.88-23.744c-26.99-16.031-71.52-17.505-97.289-9.684-4.138 1.255-8.514-1.081-9.768-5.219-1.254-4.14 1.08-8.513 5.221-9.771 29.581-8.98 78.756-7.245 109.83 11.202 3.73 2.209 4.95 7.016 2.74 10.733-2.2 3.722-7.02 4.949-10.73 2.739z"
                    />
                </svg>
            );

        case 'lastfm':
            return (
                <svg className={className} viewBox="0 0 455 455">
                    <rect className="icon-lastfm-inner" x="5" y="5" width="445" height="445" />
                    <path
                        className="icon-lastfm-outer"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0,0v455h455V0H0z M309.94,315.01c-62.425,0-84.085-28.145-95.625-63.145 L202.77,215.77c-8.65-26.33-18.75-46.915-50.505-46.915c-22.035,0-44.395,15.88-44.395,60.275c0,34.63,17.695,56.29,42.575,56.29 c28.145,0,46.915-20.94,46.915-20.94l11.565,31.385c0,0-19.495,19.125-60.275,19.125c-50.51,0-78.65-29.57-78.65-84.435 c0-56.99,28.14-90.565,81.19-90.565c47.99,0,72.165,17.325,87.305,64.235L250.41,240.3c8.65,26.35,23.805,45.47,60.25,45.47 c24.555,0,37.52-5.41,37.52-18.77c0-10.45-6.13-18.025-24.53-22.365l-24.53-5.76c-29.94-7.225-41.855-22.735-41.855-47.265 c0-39.335,31.755-51.6,64.215-51.6c36.82,0,59.18,13.34,62.07,45.82l-36.07,4.335c-1.445-15.53-10.82-22.015-28.145-22.015 c-15.88,0-25.625,7.21-25.625,19.475c0,10.84,4.685,17.325,20.565,20.94l23.085,5.055c31.035,7.21,47.64,22.365,47.64,51.585 C385,301.295,354.685,315.01,309.94,315.01z"
                    />
                </svg>
            );

        case 'listenbrainz':
        case 'musicbrainz':
            return (
                <svg className={className} viewBox="0 0 27 30">
                    <polygon
                        className={`icon-${name}-left`}
                        stroke="none"
                        points="13 1 1 8 1 22 13 29 13 1"
                    />
                    <polygon
                        className={`icon-${name}-right`}
                        stroke="none"
                        points="14 1 26 8 26 22 14 29 14 1"
                    />
                </svg>
            );

        case 'youtube':
            return (
                <svg className={className} viewBox="0 0 576 512" transform="scale(1.125)">
                    <rect className="icon-youtube-inner" x="144" y="128" width="288" height="256" />
                    <path
                        className="icon-youtube-outer"
                        d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
                    />
                </svg>
            );

        case 'lookup-pending':
            return (
                <svg className={`${className} icon-lookup`} viewBox="0 0 16 16">
                    <circle className="icon-lookup-outer" cx="8" cy="8" r="8" stroke="none" />
                    <path
                        className="icon-lookup-inner"
                        d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"
                    />
                </svg>
            );

        // From: https://codepen.io/nikhil8krishnan/pen/rVoXJa
        case 'lookup-looking':
            return (
                <svg className={`${className} icon-lookup`} viewBox="0 0 100 100">
                    <circle className="icon-lookup-outer" cx="50" cy="50" r="50" stroke="none" />
                    <path
                        className="icon-lookup-inner"
                        d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
                    >
                        <animateTransform
                            attributeName="transform"
                            attributeType="XML"
                            type="rotate"
                            dur="1s"
                            from="0 50 50"
                            to="360 50 50"
                            repeatCount="indefinite"
                        />
                    </path>
                </svg>
            );

        case 'lookup-not-found':
            return (
                <svg
                    className={`${className} icon-lookup`}
                    viewBox="0 0 16 16"
                    transform="rotate(45)"
                >
                    <circle className="icon-lookup-outer" cx="8" cy="8" r="8" stroke="none" />
                    <path
                        className="icon-lookup-inner"
                        d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
                    />
                </svg>
            );
    }
}
