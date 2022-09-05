// Components
import { Card } from '../index';

// Styles
import { ListCardContainer } from './styles';

// Types
import IChuckData from '../../types/IChuckData';

interface IListCardProps {
    dataSource: IChuckData[];
}

const ListCard = ({ dataSource }: IListCardProps) => {
    return (
        <ListCardContainer>
            {dataSource &&
                dataSource?.map(item => {
                    return <Card key={item.id} {...item} />;
                })}
        </ListCardContainer>
    );
};

export default ListCard;
