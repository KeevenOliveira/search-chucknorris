/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Search from './index';
import { shallow, ShallowWrapper } from 'enzyme';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

jest.mock('axios', () => ({
    ...jest.requireActual('axios'),
    post: jest.fn(),
    get: jest.fn(),
}));

const handleSubmit = jest.fn();

describe('Search', () => {
    var wrapper: ShallowWrapper;

    // beforeEach(() => {
    //     wrapper = shallow(<Search />);
    // });

    it('should render search component', () => {
        render(<Search handleSubmit={handleSubmit} />);
        expect(screen.getByTestId('search')).toBeTruthy();
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
        console.log(screen.getByRole('form'), "screen.getByRole('form')");
        expect(screen.getByRole('form')).toBeTruthy();
    });
    it('should call handleSubmit', () => {
        render(<Search handleSubmit={handleSubmit} />);
        const form = screen.getByRole('form');
        fireEvent.submit(form);
        expect(handleSubmit).toHaveBeenCalled();
    });
});
