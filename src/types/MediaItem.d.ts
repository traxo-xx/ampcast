import BaseMediaObject from './BaseMediaObject';
import ItemType from './ItemType';
import MediaType from './MediaType';

export default interface MediaItem extends BaseMediaObject<ItemType.Media> {
    readonly mediaType: MediaType;
    readonly duration: number;
    readonly artist?: string;
    readonly albumArtist?: string;
    readonly album?: string;
    readonly track?: number;
    readonly disc?: number;
    readonly bpm?: number;
    readonly year?: number;
    readonly playedOn?: number;
    readonly aspectRatio?: number;
    readonly unplayable?: boolean;
    readonly blob?: Blob;
}
