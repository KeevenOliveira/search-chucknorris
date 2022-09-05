import * as React from 'react';
import { useCallback, useState, useEffect } from 'react';
import { createBrowserHistory } from 'history';
import { toast } from 'react-toastify';

// Components
import { Search, Card } from '../../components';

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
        const response = await ChuckService.getJokeBySearch(query);
        setDataSource(response);
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
                const result = await ChuckService.getJokeBySearch(
                    String(search),
                );
                console.log(result, 'getJokeBySearch');
                if (category) {
                    const filtered = filterCategory(category, result);
                }
                // setDataSource(result);
                history.push('/?query=' + search);
            } catch (error) {
                toast.error('Error on search');
            }
        },
        [],
    );

    console.log(dataSource);

    return (
        <Container data-testid="Home">
            <SearchContainer>
                <Image src={ChuckImage} alt="chuck" />
                <Search handleSubmit={handleSubmit} />
            </SearchContainer>
            <ContainerCards>
                {dataSource &&
                    dataSource?.map((item, index) => {
                        return Card && <Card key={index} {...item} />;
                    })}
                {!dataSource.length && (
                    <div>
                        <h3>Nothing to show</h3>
                        <p>Try to search something :)</p>
                    </div>
                )}
            </ContainerCards>
        </Container>
    );
};

export default Home;
