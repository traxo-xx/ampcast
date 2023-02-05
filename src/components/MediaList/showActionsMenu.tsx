import React from 'react';
import Action from 'types/Action';
import ItemType from 'types/ItemType';
import MediaObject from 'types/MediaObject';
import {getService} from 'services/mediaServices';
import {browser} from 'utils';
import {getLabelForAction} from 'components/Actions';
import PopupMenu, {
    PopupMenuItem,
    PopupMenuProps,
    PopupMenuSeparator,
    showPopupMenu,
} from 'components/PopupMenu';

export default async function showActionsMenu<T extends MediaObject>(
    items: readonly T[],
    x: number,
    y: number
): Promise<Action | undefined> {
    return showPopupMenu(
        (props: PopupMenuProps<Action>) => <ActionsMenu {...props} items={items} />,
        x,
        y
    );
}

interface ActionsMenuProps<T extends MediaObject> extends PopupMenuProps<Action> {
    items: readonly T[];
}

function ActionsMenu<T extends MediaObject>({items, ...props}: ActionsMenuProps<T>) {
    const item = items[0];
    const isSingleItem = items.length === 1 && !!item;
    const [serviceId] = item?.src.split(':') || [];
    const service = getService(serviceId);
    const allPlayable = items.every(
        (item) => item.itemType === ItemType.Media || item.itemType === ItemType.Album
    );

    return (
        <PopupMenu {...props} className="actions">
            <ul className="actions-menu-items">
                {allPlayable ? (
                    <>
                        <PopupMenuItem<Action>
                            label="Queue"
                            action={Action.Queue}
                            acceleratorKey="Enter"
                            key={Action.Queue}
                        />
                        <PopupMenuItem<Action>
                            label="Play next"
                            action={Action.PlayNext}
                            acceleratorKey="Shift+Enter"
                            key={Action.PlayNext}
                        />
                        <PopupMenuItem<Action>
                            label="Play now"
                            action={Action.PlayNow}
                            acceleratorKey={`${browser.ctrlKeyStr}+Enter`}
                            key={Action.PlayNow}
                        />
                        <PopupMenuSeparator />
                    </>
                ) : null}
                {isSingleItem && item.itemType === ItemType.Playlist ? (
                    <PopupMenuItem<Action>
                        label={item.isPinned ? 'Unpin' : 'Pin'}
                        action={item.isPinned ? Action.Unpin : Action.Pin}
                        key={item.isPinned ? Action.Unpin : Action.Pin}
                    />
                ) : null}
                {isSingleItem && item.rating !== undefined && service?.canRate(item, true) ? (
                    <PopupMenuItem<Action>
                        label={
                            item.rating
                                ? getLabelForAction(service, Action.Unlike)
                                : getLabelForAction(service, Action.Like)
                        }
                        action={item.rating ? Action.Unlike : Action.Like}
                        key={item.rating ? Action.Unlike : Action.Like}
                    />
                ) : null}
                {isSingleItem && item.inLibrary === false && service?.canStore(item, true) ? (
                    <PopupMenuItem<Action>
                        label={getLabelForAction(service, Action.AddToLibrary)}
                        action={Action.AddToLibrary}
                        key={Action.AddToLibrary}
                    />
                ) : null}
                {isSingleItem ? (
                    <>
                        <PopupMenuSeparator />
                        <PopupMenuItem<Action>
                            label="Info..."
                            action={Action.Info}
                            acceleratorKey={`${browser.ctrlKeyStr}+I`}
                            key={Action.Info}
                        />
                    </>
                ) : null}
            </ul>
        </PopupMenu>
    );
}
