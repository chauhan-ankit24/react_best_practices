import { configureStore } from '@reduxjs/toolkit'; // Import the configureStore function from Redux Toolkit
import itemsReducer from '../features/items/itemsSlice'; // Import the items reducer

// Create and configure the Redux store
export const store = configureStore({
  reducer: {
    items: itemsReducer, // Add the items reducer to the store
  },
});
