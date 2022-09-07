import * as React from 'react';
import { useCallback, useState, useEffect } from 'react';
import { BrowserHistory } from 'history';
import { toast } from 'react-toastify';

// Components
import { Search, ListCard } from '../../components';

// Services
import { ChuckService } from '../../services';

// Styles
import { SearchContainer, Container, Image } from './styles';

// Images
import ChuckImage from '../../assets/chuck.png';

// Utils
import { filterCategory } from '../../utils';

// Types
import IChuckData from '../../types/IChuckData';
import { AxiosError } from 'axios';

interface IHomeProps {
    history: BrowserHistory;
}

const Home = ({ history }: IHomeProps) => {
    const [dataSource, setDataSource] = useState<IChuckData[]>([] as any);

    const handleSearch = useCallback(async (query: string) => {
        try {
            const response = await ChuckService.getJokeBySearch(query);
            setDataSource(response.result);
        } catch (error) {
            toast.error('Error to get jokes');
        }
    }, []);

    useEffect(() => {
        const params = new URLSearchParams(history?.location.search);
        const query = params.get('query');
        if (query) {
            handleSearch(query);
        }
    }, [handleSearch]);

    const handleSubmit = useCallback(
        async (
            event: React.FormEvent<HTMLFormElement>,
            search: string | undefined,
            category: string | undefined,
        ) => {
            event.preventDefault();
            try {
                if (!search) {
                    toast.error('Please, enter a search');
                    return;
                }
                history.push('/?query=' + search);
                const data = await ChuckService.getJokeBySearch(String(search));
                if (category) {
                    const filtered = filterCategory(category, data);
                    console.log(filtered, 'filtered');
                    setDataSource(filtered as IChuckData[]);
                    return;
                }
                setDataSource(data.result);
            } catch (error) {
                if (error instanceof AxiosError) {
                    toast.error(error.response?.data.message);
                    return;
                }
                toast.error('Error on search');
            }
        },
        [history],
    );

    return (
        <Container data-testid="Home">
            <SearchContainer>
                <Image src={ChuckImage} alt="chuck" />
                <Search handleSubmit={handleSubmit} />
            </SearchContainer>
            <ListCard dataSource={dataSource} />
        </Container>
    );
};

export default Home;
