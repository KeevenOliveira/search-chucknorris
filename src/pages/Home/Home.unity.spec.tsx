import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { createBrowserHistory } from 'history';
import Home from './index';

const renderHome = () => {
    const history = createBrowserHistory();
    render(<Home history={history} />);
};

describe('<Home/> - Unity', () => {
    it('should render home component', () => {
        renderHome();
        expect(screen.getByTestId('Home')).toBeTruthy();
    });
    it('should render Image with alt Chuck', () => {
        renderHome();
        expect(screen.getByAltText('chuck')).toBeTruthy();
    });
    it('should render image', () => {
        renderHome();
        expect(screen.getByRole('img')).toBeTruthy();
    });
    it('should render search component', () => {
        renderHome();
        expect(screen.getByTestId('search')).toBeTruthy();
    });
    it('should render ListCard component', () => {
        renderHome();
        expect(screen.getByTestId('ListCard')).toBeTruthy();
    });
});
