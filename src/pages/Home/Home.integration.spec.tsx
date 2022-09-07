/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/await-async-query */
import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import axios from 'axios';
import { createBrowserHistory } from 'history';

import Home from './index';

import { ListCard } from '../../components';

jest.mock('axios', () => ({
    ...jest.requireActual('axios'),
    post: jest.fn(),
    get: jest.fn().mockResolvedValueOnce({
        data: {
            total: 2,
            result: [
                {
                    categories: [],
                    created_at: '2020-01-05 13:42:24.48275',
                    icon_url:
                        'https://assets.chucknorris.host/img/avatar/chuck-norris.png',

                    id: '0',
                    updated_at: '2020-01-05 13:42:24.48275',
                    url: 'https://api.chucknorris.io/jokes/0',
                    value: 'Chuck Norris can divide by zero.',
                },
                {
                    categories: [],
                    created_at: '2020-01-05 13:42:24.48275',
                    icon_url:
                        'https://assets.chucknorris.host/img/avatar/chuck-norris.png',

                    id: '1',
                    updated_at: '2020-01-05 13:42:24.48275',
                    url: 'https://api.chucknorris.io/jokes/1',
                    value: 'Chuck Norris can divide by zero.',
                },
            ],
        },
    }),
}));

const renderHome = () => {
    const history = createBrowserHistory();
    render(<Home history={history} />);
};

describe('<Home/> - Integration', () => {
    it('should render ListCard with 5 Cards', () => {
        renderHome();
        const dataSource = [
            {
                categories: [],
                created_at: '2020-01-05 13:42:24.48275',
                icon_url:
                    'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
                id: '0',
                updated_at: '2020-01-05 13:42:24.48275',
                url: 'https://api.chucknorris.io/jokes/0',
                value: 'Chuck Norris can divide by zero.',
            },
            {
                categories: [],
                created_at: '2020-01-05 13:42:24.48275',
                icon_url:
                    'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
                id: '1',
                updated_at: '2020-01-05 13:42:24.48275',
                url: 'https://api.chucknorris.io/jokes/1',
                value: 'Chuck Norris can divide by zero.',
            },
            {
                categories: [],
                created_at: '2020-01-05 13:42:24.48275',
                icon_url:
                    'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
                id: '2',
                updated_at: '2020-01-05 13:42:24.48275',
                url: 'https://api.chucknorris.io/jokes/2',
                value: 'Chuck Norris can divide by zero.',
            },
            {
                categories: [],
                created_at: '2020-01-05 13:42:24.48275',
                icon_url:
                    'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
                id: '3',
                updated_at: '2020-01-05 13:42:24.48275',
                url: 'https://api.chucknorris.io/jokes/3',
                value: 'Chuck Norris can divide by zero.',
            },
            {
                categories: [],
                created_at: '2020-01-05 13:42:24.48275',
                icon_url:
                    'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
                id: '4',
                updated_at: '2020-01-05 13:42',
                url: 'https://api.chucknorris.io/jokes/4',
                value: 'Chuck Norris can divide by zero.',
            },
        ];
        render(<ListCard dataSource={dataSource} />);
        expect(screen.getAllByTestId('Card')).toHaveLength(5);
    });
    it('should return error alert when search is not defined', () => {
        renderHome();
        const search = screen.getByTestId('search');
        fireEvent.submit(search);
        const alert = screen.findByRole('alert');
        expect(alert).toBeTruthy();
        // expect(alert).toHaveTextContent('Please, enter a search');
    });
    it('should get params in query and set in search', () => {
        const history = createBrowserHistory();
        history.push('/?query=chuck');
        render(<Home history={history} />);
        const search = screen.getByPlaceholderText(
            'Search',
        ) as HTMLInputElement;
        expect(search.value).toBe('chuck');
    });
    it('should be possible pass to history.push("/") when search is value undefined', () => {
        const history = createBrowserHistory();
        history.push('/?query=chuck');
        render(<Home history={history} />);
        const search = screen.getByPlaceholderText(
            'Search',
        ) as HTMLInputElement;
        expect(search.value).toBe('chuck');
        search.value = '';
        expect(history.location.pathname).toBe('/');
    });
    it('should get all cards in request with search component', async () => {
        const history = createBrowserHistory();
        history.push('/?query=b');
        render(<Home history={history} />);
        const input = screen.getByPlaceholderText('Search') as HTMLInputElement;
        expect(input).toBeTruthy();
        expect(input.value).toBe('b');
        await fireEvent.change(input, { target: { value: 'a' } });
        const form = screen.getByRole('form');
        (axios.get as jest.Mock).mockResolvedValueOnce({
            data: {
                total: 2,
                result: [
                    {
                        categories: [],
                        created_at: '2020-01-05 13:42:24.48275',
                        icon_url:
                            'https://assets.chucknorris.host/img/avatar/chuck-norris.png',

                        id: '0',
                        updated_at: '2020-01-05 13:42:24.48275',
                        url: 'https://api.chucknorris.io/jokes/0',
                        value: 'Chuck Norris can divide by zero.',
                    },
                    {
                        categories: [],
                        created_at: '2020-01-05 13:42:24.48275',
                        icon_url:
                            'https://assets.chucknorris.host/img/avatar/chuck-norris.png',

                        id: '1',
                        updated_at: '2020-01-05 13:42:24.48275',
                        url: 'https://api.chucknorris.io/jokes/1',
                        value: 'Chuck Norris can divide by zero.',
                    },
                ],
            },
        });
        await fireEvent.submit(form);

        const card = await screen.findAllByTestId('Card');

        expect(card).toHaveLength(2);
        expect(history.location.search).toEqual('?query=a');
    });
    it('should filter when category is selected', async () => {
        renderHome();
        const category = document.getElementById(
            'react-select-7-input',
        ) as HTMLInputElement;
        expect(category).toBeTruthy();
        fireEvent.change(category, { target: { value: 'animal' } });
        expect(category.value).toBe('animal');
        const form = screen.getByRole('form');
        (axios.get as jest.Mock).mockResolvedValueOnce({
            data: {
                total: 2,
                result: [
                    {
                        categories: ['animal'],
                        created_at: '2020-01-05 13:42:24.48275',
                        icon_url:
                            'https://assets.chucknorris.host/img/avatar/chuck-norris.png',

                        id: '0',
                        updated_at: '2020-01-05 13:42:24.48275',
                        url: 'https://api.chucknorris.io/jokes/0',
                        value: 'Chuck Norris can divide by zero.',
                    },
                    {
                        categories: ['animal'],
                        created_at: '2020-01-05 13:42:24.48275',
                        icon_url:
                            'https://assets.chucknorris.host/img/avatar/chuck-norris.png',

                        id: '1',
                        updated_at: '2020-01-05 13:42:24.48275',
                        url: 'https://api.chucknorris.io/jokes/1',
                        value: 'Chuck Norris can divide by zero.',
                    },
                ],
            },
        });
        await fireEvent.submit(form);
        const card = await screen.findAllByTestId('Card');
        expect(card).toHaveLength(2);
    });
    it('should be show one error when request axios throw one error', () => {
        renderHome();
        const search = screen.getByTestId('search');
        (axios.get as jest.Mock).mockRejectedValueOnce({
            response: {
                data: {
                    message: 'Error',
                },
            },
        });
        fireEvent.submit(search);
        const alert = screen.findByRole('alert');
        expect(alert).toBeTruthy();
    });
    it('should be show one error when is ocurred', () => {
        renderHome();
        const search = screen.getByTestId('search');
        (axios.get as jest.Mock).mockRejectedValueOnce({
            message: 'Error',
        });
        fireEvent.submit(search);
        const alert = screen.findByRole('alert');
        expect(alert).toBeTruthy();
    });
});
