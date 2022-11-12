import {useEffect, useState} from 'react';
import MediaObject from 'types/MediaObject';
import MediaSource from 'types/MediaSource';
import Pager from 'types/Pager';

export default function useSource<T extends MediaObject>(
    source: MediaSource<T> | null,
    params?: Record<string, unknown>
) {
    const [pager, setPager] = useState<Pager<T> | null>(null);

    useEffect(() => {
        setPager(source?.search(params) || null);
    }, [source, params]);

    return pager;
}