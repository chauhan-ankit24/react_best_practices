import React from 'react';
import SearchBar from './components/SearchBar';
import ItemList from './components/ItemList';

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Item List Filter</h1>
      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl">
        <SearchBar />
        <ItemList />
      </div>
    </div>
  );
}

export default App;
