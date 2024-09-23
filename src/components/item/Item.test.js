import React from 'react';
import { render, screen } from '@testing-library/react';
import Item from './Item';

describe('Item Component', () => {
    test('renders the item text correctly', () => {
        const itemText = 'Test Item';
        render(<Item item={itemText} />);

        const itemElement = screen.getByText(itemText);
        expect(itemElement).toBeInTheDocument();
    });

    test('renders the initial render count', () => {
        const itemText = 'Apple';
        render(<Item item={itemText} />);

        const renderCountElement = screen.getByText(/Renders: 1/i);
        expect(renderCountElement).toBeInTheDocument();
    });

    test('should render the item correctly and track render count', () => {
        const { rerender } = render(<Item item="Apple" />);

        // Check initial render with render count = 1
        expect(screen.getByText(/Apple/)).toBeInTheDocument();
        expect(screen.getByText(/Renders: 1/)).toBeInTheDocument();

        // Re-render the component
        rerender(<Item item="Banana" />);

        // Check that render count increments to 2
        expect(screen.getByText(/Banana/)).toBeInTheDocument();
        expect(screen.getByText(/Renders: 2/)).toBeInTheDocument();
    });

    test('should not re-render if the item prop stays the same (memoization)', () => {
        const { rerender } = render(<Item item="Apple" />);

        // Check initial render with render count = 1
        expect(screen.getByText(/Renders: 1/)).toBeInTheDocument();

        // Re-render the component with the same item
        rerender(<Item item="Apple" />);

        // Render count should stay the same because React.memo prevents re-rendering
        expect(screen.getByText(/Renders: 1/)).toBeInTheDocument();
    });
});
