import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PaginationControls from './PaginationControls';

describe('PaginationControls', () => {
  const mockHandlePreviousPage = jest.fn();
  const mockHandleNextPage = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders current page and total pages', () => {
    render(
      <PaginationControls
        currentPage={1}
        totalPages={5}
        handlePreviousPage={mockHandlePreviousPage}
        handleNextPage={mockHandleNextPage}
      />
    );

    expect(screen.getByText(/1 \/ 5/i)).toBeInTheDocument();
  });

  test('calls handlePreviousPage when Previous button is clicked', () => {
    render(
      <PaginationControls
        currentPage={2}
        totalPages={5}
        handlePreviousPage={mockHandlePreviousPage}
        handleNextPage={mockHandleNextPage}
      />
    );

    const previousButton = screen.getByText(/Previous/i);
    fireEvent.click(previousButton);

    expect(mockHandlePreviousPage).toHaveBeenCalledTimes(1);
  });

  test('calls handleNextPage when Next button is clicked', () => {
    render(
      <PaginationControls
        currentPage={2}
        totalPages={5}
        handlePreviousPage={mockHandlePreviousPage}
        handleNextPage={mockHandleNextPage}
      />
    );

    const nextButton = screen.getByText(/Next/i);
    fireEvent.click(nextButton);

    expect(mockHandleNextPage).toHaveBeenCalledTimes(1);
  });

  test('Previous button is disabled when on the first page', () => {
    render(
      <PaginationControls
        currentPage={1}
        totalPages={5}
        handlePreviousPage={mockHandlePreviousPage}
        handleNextPage={mockHandleNextPage}
      />
    );

    const previousButton = screen.getByText(/Previous/i);
    expect(previousButton).toBeDisabled();
  });

  test('Next button is disabled when on the last page', () => {
    render(
      <PaginationControls
        currentPage={5}
        totalPages={5}
        handlePreviousPage={mockHandlePreviousPage}
        handleNextPage={mockHandleNextPage}
      />
    );

    const nextButton = screen.getByText(/Next/i);
    expect(nextButton).toBeDisabled();
  });
});
