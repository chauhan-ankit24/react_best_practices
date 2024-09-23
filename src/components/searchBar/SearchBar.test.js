import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import SearchBar from './SearchBar';

const mockStore = configureStore([]);

describe('SearchBar', () => {
    let store;

    beforeEach(() => {
        store = mockStore({
            items: {
                searchTerm: '',
            },
        });
        jest.clearAllMocks(); // Clear mock calls between tests
    });

    it('Test Case 1: renders SearchBar correctly', () => {
        render(
            <Provider store={store}>
                <SearchBar />
            </Provider>
        );

        const input = screen.getByPlaceholderText(/Search items.../i);
        expect(input).toBeInTheDocument();
        expect(input).toHaveValue('');
    });  
});
