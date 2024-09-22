import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: ['Apple', 'Banana', 'Orange', 'Mango', 'Grapes'],
  searchTerm: '',
};

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { setSearchTerm } = itemsSlice.actions;

export const selectFilteredItems = (state) => {
  const { items, searchTerm } = state.items;
  return items.filter((item) => item.toLowerCase().includes(searchTerm.toLowerCase()));
};

export default itemsSlice.reducer;
