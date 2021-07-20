import type IconName from 'components/Icon';
import MediaObject from './MediaObject';
import MediaSourceLayout from './MediaSourceLayout';
import Pager from './Pager';

export default interface MediaSource<T extends MediaObject = MediaObject> {
    readonly id: string;
    readonly title: string;
    readonly icon: IconName;
    readonly itemType: T['itemType'];
    readonly layout?: MediaSourceLayout;
    readonly secondaryLayout?: MediaSourceLayout;
    readonly tertiaryLayout?: MediaSourceLayout;
    readonly searchable?: boolean;
    readonly unplayable?: boolean;
    search(q: string): Pager<T>;
}
