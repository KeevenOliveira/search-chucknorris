import * as React from 'react';
import axios from 'axios';

import { BASE_URL, getCategories, getJokeBySearch } from './chuck.service';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('ChuckService', () => {
    it('should verify URL Chuck Norris', () => {
        const expected = 'https://api.chucknorris.io/jokes';
        expect(BASE_URL).toEqual(expected);
    });
    it('should getCategories', async () => {
        const expected = [
            'animal',
            'career',
            'celebrity',
            'dev',
            'explicit',
            'fashion',
            'food',
            'history',
            'money',
            'movie',
            'music',
            'political',
            'religion',
            'science',
            'sport',
            'travel',
        ];

        const payload = {
            data: expected,
        };

        mockedAxios.get.mockResolvedValue(payload);
        const result = await getCategories();
        expect(result).toEqual(expected);
    });
    it('should getJokeBySearch', async () => {
        const expected = {
            result: [
                {
                    categories: [],
                    created_at: '2020-01-05 13:42:19.826772',
                    icon_url:
                        'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
                    id: 'xk7U8n6STsOYUu2zQ2h6Uw',
                    updated_at: '2020-01-05 13:42:19.826772',
                    url: 'https://api.chucknorris.io/jokes/xk7U8n6STsOYUu2zQ2h6Uw',
                    value: 'Chuck Norris can kill two stones with one bird.',
                },
            ],
            total: 1,
        };

        const payload = {
            data: expected,
        };

        mockedAxios.get.mockResolvedValue(payload);
        const result = await getJokeBySearch('Chuck Norris');
        expect(result).toEqual(expected);
    });
});
