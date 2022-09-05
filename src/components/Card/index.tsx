import * as React from 'react';
// Types
import IChuckData from '../../types/IChuckData';

// Styles
import { CardContainer, CardContent } from './styles';

const Card = ({
    categories,
    created_at,
    icon_url,
    id,
    updated_at,
    url,
    value,
}: IChuckData) => {
    return (
        <CardContainer data-testid="Card">
            <CardContent href={url}>
                <h1>“</h1>
                <p>{value}</p>
                <h1>”</h1>
            </CardContent>
        </CardContainer>
    );
};

export default Card;
