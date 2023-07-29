import type {IconName} from 'components/Icon';
import Auth from './Auth';
import ItemType from './ItemType';
import LibraryAction from './LibraryAction';
import MediaItem from './MediaItem';
import MediaFilter from './MediaFilter';
import MediaObject from './MediaObject';
import MediaPlaylist from './MediaPlaylist';
import MediaServiceId from './MediaServiceId';
import MediaSource from './MediaSource';
import PlayableItem from './PlayableItem';
import Pin from './Pin';
import ViewType from './ViewType';

type BaseMediaService = Auth & {
    readonly id: MediaServiceId;
    readonly name: string;
    readonly icon: MediaServiceId;
    readonly url: string;
    readonly roots: readonly MediaSource<MediaObject>[];
    readonly sources: readonly MediaSource<MediaObject>[];
    readonly defaultHidden?: boolean; // `true` for all services
    readonly authServiceId?: MediaServiceId;
    readonly defaultNoScrobble?: boolean;
    readonly icons?: Partial<Record<LibraryAction, IconName>>;
    readonly labels?: Partial<Record<LibraryAction, string>>;
    canRate: (item: MediaObject, inline?: boolean) => boolean;
    canStore: (item: MediaObject, inline?: boolean) => boolean;
    compareForRating: <T extends MediaObject>(a: T, b: T) => boolean;
    createSourceFromPin?: (pin: Pin) => MediaSource<MediaPlaylist>;
    getFilters?: (
        viewType: ViewType.ByDecade | ViewType.ByGenre,
        itemType: ItemType
    ) => Promise<readonly MediaFilter[]>;
    getMetadata?: <T extends MediaObject>(item: T) => Promise<T>;
    getPlayableUrl?: (item: PlayableItem) => string;
    getThumbnailUrl?: (url: string) => string;
    lookup?: (
        artist: string,
        title: string,
        limit?: number,
        timeout?: number
    ) => Promise<readonly MediaItem[]>;
    rate?: (item: MediaObject, rating: number) => Promise<void>;
    bulkRate?: (items: readonly MediaObject[], rating: number) => Promise<void>;
    store?: (item: MediaObject, inLibrary: boolean) => Promise<void>;
    bulkStore?: (items: readonly MediaObject[], inLibrary: boolean) => Promise<void>;
};

export default BaseMediaService;