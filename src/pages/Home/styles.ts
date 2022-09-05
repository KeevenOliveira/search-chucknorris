import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const SearchContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Image = styled.img`
    margin-top: 2rem;
    width: 25%;

    @media (max-width: 425px) {
        width: 50%;
    }
`;

export const ContainerCards = styled.section`
    div {
        text-align: center;
        h3 {
            margin-top: 2rem;
        }
    }
`;
