import * as React from 'react';
import { render, screen } from '@testing-library/react';

import Home from './index';

describe('Home', () => {
    it('should render home component', () => {
        render(<Home />);
        expect(screen.getByTestId('Home')).toBeTruthy();
    });
});
