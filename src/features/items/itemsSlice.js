import { createSlice } from '@reduxjs/toolkit';

// Create a slice for items with initial state and reducers
export const itemsSlice = createSlice({
  name: 'items',
  initialState: {
    items: [],         // Array to store items
    searchTerm: '',    // Term to filter items
    currentPage: 1,    // Track the current page for pagination
    pageSize: 4,       // Number of items per page for pagination
  },
  reducers: {
    // Reducer to set the items array
    setItems: (state, action) => {
      state.items = action.payload;
    },
    // Reducer to set the search term and reset the current page
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
      state.currentPage = 1; // Reset to first page when search term changes
    },
    // Reducer to set the current page
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    // Reducer to set the page size
    setPageSize: (state, action) => {
      state.pageSize = action.payload;
    },
  },
});

// Export actions for use in components
export const { setItems, setSearchTerm, setCurrentPage, setPageSize } = itemsSlice.actions;

// Export the reducer to be used in the store
export default itemsSlice.reducer;
