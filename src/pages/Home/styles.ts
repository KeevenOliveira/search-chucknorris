import styled from 'styled-components';

export const Container = styled.div``;

export const SearchContainer = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: absolute;
    margin-top: -25px;
    width: 100%;
    overflow: hidden;
`;

export const Image = styled.img`
    margin-top: 2rem;
    width: 25%;

    @media (max-width: 425px) {
        width: 50%;
    }
`;
