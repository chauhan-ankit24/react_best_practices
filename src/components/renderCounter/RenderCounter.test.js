import React from 'react';
import { render, screen } from '@testing-library/react';
import RenderCounter from './RenderCounter';

describe('RenderCounter', () => {
  test('renders the initial render count correctly', () => {
    render(<RenderCounter />);
    expect(screen.getByText(/Page\/Global Render Counter: 2/i)).toBeInTheDocument();
  });

  test('increments the render count on re-renders', () => {
    const { rerender } = render(<RenderCounter />);
    
    // Rerender the component
    rerender(<RenderCounter />);
    expect(screen.getByText(/Page\/Global Render Counter: 3/i)).toBeInTheDocument();
  });
});
