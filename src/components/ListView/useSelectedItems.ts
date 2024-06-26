import usePrevious from 'hooks/usePrevious';
import {useCallback, useEffect, useState} from 'react';
import {exists} from 'utils';

export default function useSelectedItems<T>(
    items: readonly T[],
    itemKey: keyof T,
    rowIndex: number
) {
    const [selectedItems, setSelectedItems] = useState<readonly T[]>([]);
    const prevItems = usePrevious(items);

    useEffect(() => {
        // Make sure that `selectedItems` is always a subset of `items`.
        if (items !== prevItems) {
            const newSelectedItems = items.filter((item) =>
                selectedItems.some((selectedItem) => selectedItem[itemKey] === item[itemKey])
            );
            if (!compareArrays(selectedItems, newSelectedItems)) {
                const size = items.length;
                if (size > 0 && newSelectedItems.length === 0) {
                    if (rowIndex < size) {
                        const item = items[rowIndex];
                        setSelectedItems(item ? [item] : []);
                    } else {
                        const item = items[size - 1];
                        setSelectedItems(item ? [item] : []);
                    }
                } else {
                    setSelectedItems(newSelectedItems);
                }
            }
        }
    }, [prevItems, items, selectedItems, itemKey, rowIndex]);

    const selectAll = useCallback(() => {
        setSelectedItems(items.filter(exists));
    }, [items]);

    const selectAt = useCallback(
        (index: number) => {
            const item = items[index];
            setSelectedItems(item ? [item] : []);
        },
        [items]
    );

    const selectRange = useCallback(
        (firstIndex: number, lastIndex: number) => {
            const start = Math.min(firstIndex, lastIndex);
            const end = Math.max(firstIndex, lastIndex);
            const selectedItems = items.slice(start, end + 1).filter(exists);
            setSelectedItems(selectedItems);
        },
        [items]
    );

    const toggleSelectionAt = useCallback(
        (index: number, force?: boolean) => {
            const toggledItem = items[index];
            const hasItem = selectedItems.includes(toggledItem);
            if (hasItem !== force) {
                if (hasItem) {
                    setSelectedItems(selectedItems.filter((selected) => selected !== toggledItem));
                } else {
                    // Preserve item order in selected items
                    setSelectedItems(
                        items.filter((item) => selectedItems.includes(item) || item === toggledItem)
                    );
                }
            }
        },
        [items, selectedItems]
    );

    return {selectedItems, selectAll, selectAt, selectRange, toggleSelectionAt};
}

function compareArrays<T>(array1: readonly T[], array2: readonly T[]): boolean {
    if (array1.length !== array2.length) {
        return false;
    }
    return array1.every((value, index) => array2[index] === value);
}
