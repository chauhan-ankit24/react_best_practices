import { createSlice } from '@reduxjs/toolkit';

export const itemsSlice = createSlice({
  name: 'items',
  initialState: {
    items: [],
    searchTerm: '',
    currentPage: 1,  // Track the current page
    pageSize: 4,     // Number of items per page
  },
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
      state.currentPage = 1; // Reset page when search changes
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setPageSize: (state, action) => {
      state.pageSize = action.payload;
    },
  },
});

export const { setItems, setSearchTerm, setCurrentPage, setPageSize } = itemsSlice.actions;

export default itemsSlice.reducer;
