import { filterCategory } from './filterCategory';

describe('filterCategory', () => {
    it('should return content not filter if category is not defined', () => {
        const data = {
            total: 2,
            result: [
                {
                    categories: ['dev', 'explicit'],
                    created_at: '2020-01-05 13:42:19.45798',
                    icon_url:
                        'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
                    id: 'X6U9oY7pQDyZJ8wVhjvZ0Q',
                    updated_at: '2020-01-05 13:42:19.45798',
                    url: 'https://api.chucknorris.io/jokes/X6U9oY7pQDyZJ8wVhjvZ0Q',
                    value: 'Chuck Norris can write infinite recursion functions...',
                },
                {
                    categories: ['dev', 'explicit'],
                    created_at: '2020-01-05 13:42:19.45798',
                    icon_url:
                        'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
                    id: 'X6U9oY7pQDyZJ8wVhjvZ0Q',
                    updated_at: '2020-01-05 13:42:19.45798',
                    url: 'https://api.chucknorris.io/jokes/X6U9oY7pQDyZJ8wVhjvZ0Q',
                    value: 'Chuck Norris can write infinite recursion functions...',
                },
            ],
        };

        expect(() => filterCategory(undefined, data)).not.toThrow();
        expect(filterCategory(undefined, data)).toEqual(data);
    });

    it('should return an array of jokes with the category', () => {
        const category = 'dev';
        const data = {
            total: 2,
            result: [
                {
                    categories: ['dev', 'explicit'],
                    created_at: '2020-01-05 13:42:19.45798',
                    icon_url:
                        'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
                    id: 'X6U9oY7pQDyZJ8wVhjvZ0Q',
                    updated_at: '2020-01-05 13:42:19.45798',
                    url: 'https://api.chucknorris.io/jokes/X6U9oY7pQDyZJ8wVhjvZ0Q',
                    value: 'Chuck Norris can write infinite recursion functions...',
                },
                {
                    categories: ['dev', 'explicit'],
                    created_at: '2020-01-05 13:42:19.45798',
                    icon_url:
                        'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
                    id: 'X6U9oY7pQDyZJ8wVhjvZ0Q',
                    updated_at: '2020-01-05 13:42:19.45798',
                    url: 'https://api.chucknorris.io/jokes/X6U9oY7pQDyZJ8wVhjvZ0Q',
                    value: 'Chuck Norris can write infinite recursion functions...',
                },
            ],
        };
        const result = filterCategory(category, data);
        expect(result).toHaveLength(2);
    });

    it('should return error if data does not exist', () => {
        const category = 'dev';
        const data = null;
        expect(() => filterCategory(category, data)).toThrow(
            'Data is required',
        );
        expect(() => filterCategory(category, data)).toThrowError(
            'Data is required',
        );
    });
});
