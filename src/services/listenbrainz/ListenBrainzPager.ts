import type {Observable} from 'rxjs';
import ItemType from 'types/ItemType';
import MediaAlbum from 'types/MediaAlbum';
import MediaArtist from 'types/MediaArtist';
import MediaItem from 'types/MediaItem';
import MediaObject from 'types/MediaObject';
import MediaPlaylist from 'types/MediaPlaylist';
import MediaType from 'types/MediaType';
import Pager, {Page} from 'types/Pager';
import Thumbnail from 'types/Thumbnail';
import SequentialPager from 'services/SequentialPager';
import {createEmptyMediaObject} from 'utils';
import listenbrainzSettings from './listenbrainzSettings';
import listenbrainzApi from './listenbrainzApi';

type PlexMediaObject = plex.Track | plex.MusicVideo | plex.Album | plex.Artist | plex.Playlist;

export default class ListenBrainzPager<T extends MediaObject> implements Pager<T> {
    static minPageSize = 100;
    static maxPageSize = 1000;

    private readonly pager: Pager<T>;
    private readonly pageSize = ListenBrainzPager.maxPageSize;

    constructor(private readonly path: string, private readonly params?: Record<string, string>) {
        this.pager = new SequentialPager<T>((pageNumber) => this.fetch(pageNumber!), {
            pageSize: this.pageSize,
        });
    }

    observeComplete(): Observable<readonly T[]> {
        return this.pager.observeComplete();
    }

    observeItems(): Observable<readonly T[]> {
        return this.pager.observeItems();
    }

    observeSize(): Observable<number> {
        return this.pager.observeSize();
    }

    observeMaxSize(): Observable<number> {
        return this.pager.observeMaxSize();
    }

    observeError(): Observable<unknown> {
        return this.pager.observeError();
    }

    disconnect(): void {
        this.pager.disconnect();
    }

    fetchAt(index: number, length: number): void {
        this.pager.fetchAt(index, length);
    }

    private async fetch(pageNumber: number): Promise<Page<T>> {
        const result = await listenbrainzApi.get(
            this.path
        );

        return {items: [], total: 0};
    }

    private createItem(item: PlexMediaObject): T {
        switch (item.type) {
            case 'clip':
                return this.createMediaItemFromVideo(item) as T;

            case 'album':
                return this.createMediaAlbum(item) as T;

            case 'artist':
                return this.createMediaArtist(item) as T;

            case 'playlist':
                return this.createMediaPlaylist(item) as T;

            default:
                return this.createMediaItemFromTrack(item) as T;
        }
    }

    private createMediaItemFromTrack(track: plex.Track): MediaItem {
        const [media] = track.Media;
        const [part] = media.Part;
        const albumTitle = track.parentTitle === '[Unknown Album]' ? '' : track.parentTitle || '';

        return {
            ...createEmptyMediaObject(ItemType.Media),
            mediaType: MediaType.Audio,
            src: `plex:audio:${part.key}`,
            title: track.title,
            addedOn: track.addedAt,
            artist: track.grandparentTitle,
            albumArtist: albumTitle ? track.grandparentTitle : undefined,
            album: albumTitle,
            duration: track.duration / 1000,
            track: albumTitle ? track.index : undefined,
            rating: track.userRating,
            year: track.parentYear,
            playedOn: track.lastViewedAt ? track.lastViewedAt * 1000 : undefined,
            playCount: track.viewCount,
            plex: {
                ratingKey: track.ratingKey,
            },
            thumbnails: this.createThumbnails(track.thumb),
        };
    }

    private createMediaAlbum(album: plex.Album): MediaAlbum {
        return {
            ...createEmptyMediaObject(ItemType.Album),
            src: `plex:album:${album.ratingKey}`,
            title: album.title || '',
            addedOn: album.addedAt,
            artist: album.parentTitle,
            rating: album.userRating,
            year: album.year,
            playedOn: album.lastViewedAt ? album.lastViewedAt * 1000 : undefined,
            playCount: album.viewCount,
            genre: album.Genre?.map((genre) => genre.tag).join(';'),
            plex: {
                ratingKey: album.ratingKey,
            },
            pager: this.createPager(album.key),
            thumbnails: this.createThumbnails(album.thumb),
        };
    }

    private createMediaArtist(artist: plex.Artist): MediaArtist {
        return {
            ...createEmptyMediaObject(ItemType.Artist),
            src: `plex:album:${artist.ratingKey}`,
            title: artist.title,
            addedOn: artist.addedAt,
            rating: artist.userRating,
            genre: artist.Genre?.map((genre) => genre.tag).join(';'),
            plex: {
                ratingKey: artist.ratingKey,
            },
            pager: this.createPager(artist.key),
            thumbnails: this.createThumbnails(artist.thumb),
        };
    }

    private createMediaItemFromVideo(video: plex.MusicVideo): MediaItem {
        const [media] = video.Media;
        const [part] = media.Part;

        return {
            ...createEmptyMediaObject(ItemType.Media),
            mediaType: MediaType.Video,
            src: `plex:video:${part.key}`,
            title: video.title || 'Video',
            addedOn: video.addedAt,
            artist: video.grandparentTitle,
            duration: video.duration / 1000,
            playedOn: video.lastViewedAt ? video.lastViewedAt * 1000 : undefined,
            playCount: video.viewCount,
            plex: {
                ratingKey: video.ratingKey,
            },
            thumbnails: this.createThumbnails(video.thumb),
        };
    }

    private createMediaPlaylist(playlist: plex.Playlist): MediaPlaylist {
        return {
            ...createEmptyMediaObject(ItemType.Playlist),
            src: `plex:playlist:${playlist.key}`,
            title: playlist.title,
            addedOn: playlist.addedAt,
            duration: playlist.duration / 1000,
            playedOn: playlist.lastViewedAt ? playlist.lastViewedAt * 1000 : undefined,
            playCount: playlist.viewCount,
            trackCount: playlist.leafCount,
            plex: {
                ratingKey: playlist.ratingKey,
            },
            pager: this.createPager(playlist.key),
            thumbnails: this.createThumbnails(playlist.composite),
        };
    }

    private createThumbnails(thumb: string): Thumbnail[] | undefined {
        return thumb
            ? [
                  this.createThumbnail(thumb, 60),
                  this.createThumbnail(thumb, 120),
                  this.createThumbnail(thumb, 240),
                  this.createThumbnail(thumb, 480),
              ]
            : undefined;
    }

    private createThumbnail(thumb: string, width: number, height = width): Thumbnail {
        return {url: '', width, height};
    }

    private createPager<T extends MediaObject>(key: string): Pager<T> {
        return new ListenBrainzPager<T>(key);
    }
}