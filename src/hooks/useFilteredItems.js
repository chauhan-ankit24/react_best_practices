import { useMemo } from 'react';

const useFilteredItems = (items, searchTerm) => {
    return useMemo(() => {
        return items.filter((item) =>
            item.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [items, searchTerm]);
};

export default useFilteredItems;
