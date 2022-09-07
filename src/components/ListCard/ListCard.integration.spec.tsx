import * as React from 'react';
import { render, screen } from '@testing-library/react';

import ListCard from './index';

const renderListCard = () => {
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
    ];
    render(<ListCard dataSource={dataSource} />);
};

describe('<ListCard/>', () => {
    it('should render ListCard component', () => {
        renderListCard();
        expect(screen.getByTestId('ListCard')).toBeTruthy();
    });
    it('should render one card with value in <p></p>', () => {
        renderListCard();
        expect(
            screen.getByText('Chuck Norris can divide by zero.'),
        ).toBeTruthy();
    });
    it('should render one Card component', () => {
        renderListCard();
        expect(screen.getByTestId('Card')).toBeTruthy();
    });
    it('should render one message with dataSource does not has source', () => {
        const dataSource = [] as any;
        render(<ListCard dataSource={dataSource} />);
        expect(screen.getByText('Nothing to show')).toBeTruthy();
        expect(screen.getByText('Try to search something :)')).toBeTruthy();
        expect(screen.queryByTestId('Card')).toBeFalsy();
    });

    it('should render PaginatedList component', () => {
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
        ];
        render(<ListCard dataSource={dataSource} />);
        expect(screen.getByTestId('PaginatedList')).toBeTruthy();
    });

    it('should not render PaginatedList component', () => {
        const dataSource = [] as any;
        render(<ListCard dataSource={dataSource} />);
        expect(screen.queryByTestId('PaginatedList')).toBeFalsy();
    });
});
