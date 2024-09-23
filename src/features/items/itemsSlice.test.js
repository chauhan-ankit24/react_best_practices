import itemsReducer, { setItems, setSearchTerm, setCurrentPage, setPageSize } from './itemsSlice';

describe('itemsSlice', () => {
    const initialState = {
        items: [],
        searchTerm: '',
        currentPage: 1,
        pageSize: 4,
    };

    it('Test case 1: should handle initial state', () => {
        expect(itemsReducer(undefined, {})).toEqual(initialState);
    });

    it('Test case 2: should handle setting the search term', () => {
        const action = setSearchTerm('Apple');
        const state = itemsReducer(initialState, action);
        expect(state.searchTerm).toBe('Apple');
    });

    it('Test case 3: should handle setting the current page', () => {
        const action = setCurrentPage(2);
        const state = itemsReducer(initialState, action);
        expect(state.currentPage).toBe(2);
    });

    it('Test case 4: should handle setting items', () => {
        const action = setItems(['item1', 'item2']);
        const state = itemsReducer(initialState, action);
        expect(state.items).toEqual(['item1', 'item2']);
    });

    it('Test case 5: should handle setting the page size', () => {
        const action = setPageSize(10);
        const state = itemsReducer(initialState, action);
        expect(state.pageSize).toBe(10);
    });

    it('Test case 6: should reset current page when search term changes', () => {
        const modifiedState = { ...initialState, currentPage: 3 };
        const action = setSearchTerm('Banana');
        const state = itemsReducer(modifiedState, action);
        expect(state.searchTerm).toBe('Banana');
        expect(state.currentPage).toBe(1);
    });

    it('Test case 7: should not mutate the state when setting the search term', () => {
        const action = setSearchTerm('Orange');
        const state = itemsReducer(initialState, action);
        expect(state).not.toBe(initialState);
    });

    it('Test case 8: should not mutate the state when setting the current page', () => {
        const action = setCurrentPage(3);
        const state = itemsReducer(initialState, action);
        expect(state).not.toBe(initialState);
    });

    it('Test case 9: should not mutate the state when setting items', () => {
        const action = setItems(['item3', 'item4']);
        const state = itemsReducer(initialState, action);
        expect(state).not.toBe(initialState);
    });

    it('Test case 10: should not mutate the state when setting the page size', () => {
        const action = setPageSize(20);
        const state = itemsReducer(initialState, action);
        expect(state).not.toBe(initialState);
    });
});
