import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { selectFilteredItems } from '../features/items/itemsSlice';
import Item from './Item';

const ItemList = () => {
    const renderCount = useRef(0); // Counter to track renders
    renderCount.current++;

    const filteredItems = useSelector(selectFilteredItems);
    const filteredCount = filteredItems.length; // Count of filtered items

    return (
        <div className="mb-4">
            <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold text-gray-800">
                    Item List
                    <p className="text-sm text-gray-600 mb-2">
                        Total Filtered Items: <span className="font-semibold">({filteredCount})</span>
                    </p>
                </h2>
                <p className="text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded">
                    ItemList Renders: {renderCount.current}
                </p>
            </div>

            <ul className="bg-white shadow-md rounded-md p-4">
                {filteredItems.map((item, index) => (
                    <Item key={index} item={item} />
                ))}
            </ul>
        </div>
    );
};

export default React.memo(ItemList);
