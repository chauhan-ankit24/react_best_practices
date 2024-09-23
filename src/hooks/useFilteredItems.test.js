import { renderHook } from '@testing-library/react-hooks';
import useFilteredItems from './useFilteredItems';

describe('useFilteredItems', () => {
    it('Test Case 1: returns all items when searchTerm is empty', () => {
        const items = ['Apple', 'Banana', 'Orange'];
        const { result } = renderHook(() => useFilteredItems(items, ''));

        expect(result.current).toEqual(items);
    });

    it('Test Case 2: returns filtered items based on searchTerm', () => {
        const items = ['Apple', 'Banana', 'Orange'];
        const { result } = renderHook(() => useFilteredItems(items, 'a'));
    
        expect(result.current).toEqual(['Apple', 'Banana', 'Orange']);
    });
    

    it('Test Case 3: is case insensitive', () => {
        const items = ['Apple', 'Banana', 'Orange'];
        const { result } = renderHook(() => useFilteredItems(items, 'APPLE'));

        expect(result.current).toEqual(['Apple']);
    });

    it('Test Case 4: returns an empty array if no items match the searchTerm', () => {
        const items = ['Apple', 'Banana', 'Orange'];
        const { result } = renderHook(() => useFilteredItems(items, 'Grapes'));

        expect(result.current).toEqual([]);
    });

    it('Test Case 5: updates when items or searchTerm change', () => {
        const { result, rerender } = renderHook(
            ({ items, searchTerm }) => useFilteredItems(items, searchTerm), 
            {
                initialProps: { items: ['Apple', 'Banana'], searchTerm: 'a' },
            }
        );

        expect(result.current).toEqual(['Apple', 'Banana']);

        rerender({ items: ['Apple', 'Banana'], searchTerm: 'Apple' });
        expect(result.current).toEqual(['Apple']);

        rerender({ items: ['Apple', 'Banana'], searchTerm: 'x' });
        expect(result.current).toEqual([]);
    });
});
