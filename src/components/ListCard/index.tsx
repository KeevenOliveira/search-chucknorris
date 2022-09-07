import * as React from 'react';
import { PaginatedList } from 'react-paginated-list';
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
            {!!dataSource.length && (
                <div data-testid="PaginatedList">
                    <PaginatedList
                        list={dataSource}
                        itemsPerPage={5}
                        renderList={(list: IChuckData[]) => (
                            <>
                                {list.map((item: IChuckData) => (
                                    <Card key={item.id} {...item} />
                                ))}
                            </>
                        )}
                    />
                </div>
            )}
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
