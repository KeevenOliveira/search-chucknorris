import * as React from 'react';
// Components
import { Card } from '../index';

// Styles
import { ListCardContainer } from './styles';

// Types
import IChuckData from '../../types/IChuckData';

interface IListCardProps {
    dataSource: IChuckData[] | [];
}

const ListCard = ({ dataSource }: IListCardProps) => {
    return (
        <ListCardContainer data-testid="ListCard">
            {dataSource &&
                dataSource?.map((item, index) => {
                    return Card && <Card key={index} {...item} />;
                })}
            {!dataSource?.length && (
                <div>
                    <h3>Nothing to show</h3>
                    <p>Try to search something :)</p>
                </div>
            )}
        </ListCardContainer>
    );
};

export default ListCard;
