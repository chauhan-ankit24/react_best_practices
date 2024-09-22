import React, { useEffect } from 'react';
import SearchBar from './components/SearchBar';
import ItemList from './components/ItemList';
import RenderCounter from './components/RenderCounter';
import { setItems } from './features/items/itemsSlice';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();

  // Dummy items to populate the list
  const dummyItems = [
    'Apple',
    'Banana',
    'Orange',
    'Grapes',
    'Pineapple',
    'Mango',
    'Peach',
    'Strawberry',
    'Blueberry',
    'Watermelon',
    'Kiwi',
    'Papaya',
    'Lychee',
    'Dragonfruit',
    'Raspberry',
    'Blackberry',
    'Cherry',
    'Pomegranate',
    'Coconut',
    'Plum',
  ];

  useEffect(() => {
    // Dispatch the dummy items to populate the Redux store
    dispatch(setItems(dummyItems));
  }, [dispatch]);
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-8 mt-0">
        My Item List Application
      </h1>

      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl">
        <RenderCounter />
        <SearchBar />
        <ItemList />
      </div>
    </div>
  );
}

export default App;



