import React, {useRef} from 'react';
import MediaType from 'types/MediaType';
import Dialog, {DialogProps} from 'components/Dialog';
import MediaSourceLabel from 'components/MediaSources/MediaSourceLabel';
import useCurrentlyPlaying from 'hooks/useCurrentlyPlaying';
import useCurrentVisualizer from 'hooks/useCurrentVisualizer';
import useFirstValue from 'hooks/useFirstValue';
import MediaInfo from './MediaInfo';
import VisualizerInfo from './VisualizerInfo';
import useMediaInfoDialog from './useMediaInfoDialog';
import './CurrentlyPlayingDialog.scss';

export default function CurrentlyPlayingDialog(props: DialogProps) {
    const ref = useRef<HTMLDialogElement>(null);
    const {debug} = useMediaInfoDialog(ref);
    const currentlyPlaying = useCurrentlyPlaying();
    const currentVisualizer = useCurrentVisualizer();
    const item = useFirstValue(currentlyPlaying);
    const visualizer = useFirstValue(currentVisualizer);

    return (
        <Dialog
            {...props}
            className="currently-playing-dialog media-info-dialog"
            title={<MediaSourceLabel icon="info" text="Media Info" />}
            ref={ref}
        >
            <form method="dialog">
                {item ? <MediaInfo item={item} debug={debug} /> : <p>The playlist is empty.</p>}
                {item && item.mediaType !== MediaType.Video ? (
                    <VisualizerInfo visualizer={visualizer} />
                ) : null}
                <footer className="dialog-buttons">
                    <button>Close</button>
                </footer>
            </form>
        </Dialog>
    );
}
