import * as React from 'react';
import { useCallback, useState, useEffect } from 'react';
import { createBrowserHistory } from 'history';
import { toast } from 'react-toastify';

// Components
import { Search, ListCard } from '../../components';

// Services
import { ChuckService } from '../../services';

// Types
import IChuckData from '../../types/IChuckData';

// Styles
import { SearchContainer, Container, Image, ContainerCards } from './styles';

// Images
import ChuckImage from '../../assets/chuck.png';

// Utils
import { filterCategory } from '../../utils';

const Home = () => {
    const history = createBrowserHistory();

    const [dataSource, setDataSource] = useState<IChuckData[]>([] as any);

    useEffect(() => {
        const params = new URLSearchParams(history.location.search);
        const query = params.get('query');
        if (query) {
            handleSearch(query);
        }
    }, []);

    const handleSearch = useCallback(async (query: string) => {
        try {
            const response = await ChuckService.getJokeBySearch(query);
            setDataSource(response.result);
        } catch (error) {
            toast.error('Error to get jokes');
        }
    }, []);

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
                const data = await ChuckService.getJokeBySearch(String(search));
                history.push('/?query=' + search);
                if (category) {
                    const filtered = filterCategory(category, data);
                    console.log(filtered, 'filtered');
                    setDataSource(filtered as IChuckData[]);
                    return;
                }
                setDataSource(data.result);
            } catch (error) {
                toast.error('Error on search');
            }
        },
        [],
    );

    return (
        <Container data-testid="Home">
            <SearchContainer>
                <Image src={ChuckImage} alt="chuck" />
                <Search handleSubmit={handleSubmit} />
            </SearchContainer>
            <ContainerCards>
                <ListCard dataSource={dataSource} />
            </ContainerCards>
        </Container>
    );
};

export default Home;
