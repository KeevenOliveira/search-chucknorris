/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Search from './index';
import { fireEvent, render, screen } from '@testing-library/react';

jest.mock('axios', () => ({
    ...jest.requireActual('axios'),
    post: jest.fn(),
    get: jest.fn(),
}));

const handleSubmit = jest.fn();

describe('<Search/>', () => {
    it('should render search component', () => {
        render(<Search handleSubmit={handleSubmit} />);
        expect(screen.getByTestId('search')).toBeTruthy();
    });

    it('should render a input with type equals search', () => {
        render(<Search handleSubmit={handleSubmit} />);
        expect(screen.getByPlaceholderText('Search')).toHaveAttribute(
            'type',
            'search',
        );
    });

    it('should set letter in input', () => {
        render(<Search handleSubmit={handleSubmit} />);
        const input = screen.getByPlaceholderText('Search') as HTMLInputElement;
        expect(input).toBeTruthy();
        input.value = 'a';
        expect(input.value).toBe('a');
    });

    it('should render a form', () => {
        render(<Search handleSubmit={handleSubmit} />);
        expect(screen.getByRole('form')).toBeTruthy();
    });

    it('should call handleSubmit', () => {
        render(<Search handleSubmit={handleSubmit} />);
        const form = screen.getByRole('form');
        fireEvent.submit(form);
        expect(handleSubmit).toHaveBeenCalled();
    });
});
