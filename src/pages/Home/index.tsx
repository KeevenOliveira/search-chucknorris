import * as React from 'react';

// Components
// import { Search } from '../../components';

// Styles
import { SearchContainer, Container, Image } from './styles';

// Images
import ChuckImage from '../../assets/chuck.png';

const Home = () => {
    return (
        <Container data-testid="Home">
            <SearchContainer>
                <Image src={ChuckImage} alt="chuck" />
                {/* <Search /> */}
            </SearchContainer>
        </Container>
    );
};

export default Home;
