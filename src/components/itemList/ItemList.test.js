import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ItemList from './ItemList';

const mockStore = configureStore([]);

describe('ItemList', () => {
    let store;

    beforeEach(() => {
        store = mockStore({
            items: {
                items: ['Apple', 'Banana', 'Orange', 'Grapes', 'Pineapple'],
                searchTerm: '',
                currentPage: 1,
                pageSize: 5,
            },
        });
    });

    it('Test Case 1: renders the correct number of items', () => {
        render(
            <Provider store={store}>
                <ItemList />
            </Provider>
        );

        const displayedItems = screen.getAllByRole('listitem');
        expect(displayedItems).toHaveLength(5); // Expecting 5 items to be rendered
    });

    it('Test Case 2: shows the correct count of filtered items', () => {
        store = mockStore({
            items: {
                items: ['Apple', 'Banana', 'Orange', 'Grapes', 'Pineapple'],
                searchTerm: 'a',
                currentPage: 1,
                pageSize: 4,
            },
        });

        render(
            <Provider store={store}>
                <ItemList />
            </Provider>
        );

        expect(screen.getByText(/Showing 4 of 5 items/i)).toBeInTheDocument();
    });

    it('Test Case 3: updates the page count correctly', () => {
        store = mockStore({
            items: {
                items: ['Apple', 'Banana', 'Orange', 'Grapes', 'Pineapple'],
                searchTerm: '',
                currentPage: 1,
                pageSize: 2,
            },
        });

        render(
            <Provider store={store}>
                <ItemList />
            </Provider>
        );

        const displayedItems = screen.getAllByRole('listitem');
        expect(displayedItems).toHaveLength(2); // Expecting 2 items per page
    });

    it('Test Case 4: renders pagination controls', () => {
        render(
            <Provider store={store}>
                <ItemList />
            </Provider>
        );

        expect(screen.getByText(/previous/i)).toBeInTheDocument();
        expect(screen.getByText(/next/i)).toBeInTheDocument();
    });

    it('Test Case 5: shows render count', () => {
        render(
            <Provider store={store}>
                <ItemList />
            </Provider>
        );

        expect(screen.getByText(/ItemList Renders:/i)).toBeInTheDocument();
    });
});
