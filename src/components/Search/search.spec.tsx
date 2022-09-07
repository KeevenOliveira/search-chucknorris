/* eslint-disable testing-library/no-node-access */
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

const renderSearch = () => {
    render(<Search handleSubmit={handleSubmit} />);
};

describe('<Search/>', () => {
    it('should render search component', () => {
        renderSearch();
        expect(screen.getByTestId('search')).toBeTruthy();
    });

    it('should render a input with type equals search', () => {
        renderSearch();
        expect(screen.getByPlaceholderText('Search')).toHaveAttribute(
            'type',
            'search',
        );
    });

    it('should set letter in input', () => {
        renderSearch();
        const input = screen.getByPlaceholderText('Search') as HTMLInputElement;
        expect(input).toBeTruthy();
        input.value = 'a';
        expect(input.value).toBe('a');
    });

    it('should render a form', () => {
        renderSearch();
        expect(screen.getByRole('form')).toBeTruthy();
    });

    it('should call handleSubmit', () => {
        renderSearch();
        const form = screen.getByRole('form');
        fireEvent.submit(form);
        expect(handleSubmit).toHaveBeenCalled();
    });
    it('should be possible select one value in Select component', () => {
        renderSearch();
        const category = document.getElementById(
            'react-select-7-input',
        ) as HTMLInputElement;
        expect(category).toBeTruthy();
        fireEvent.change(category, { target: { value: 'animal' } });
        expect(category.value).toBe('animal');
    });
});
