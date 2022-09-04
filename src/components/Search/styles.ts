import styled from 'styled-components';

export const SIZE_ICON = 25;

export const InputSearch = styled.input`
    padding: 1rem;
    outline: none;
    height: 50px;
    width: 40%;
    color: #000;
    border-radius: 0 1rem 1rem 0;
    border: none;

    &::-webkit-search-cancel-button {
        cursor: pointer;
    }

    &:focus {
        border: 3px solid #3578e5;
    }

    @media (max-width: 425px) {
        width: 60%;
    }
`;

export const SearchComponent = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

export const SearchIcon = styled.button`
    background: transparent;
    border: 1px solid #fff;
    border-radius: 1rem 0 0 1rem;
    border-right: none;
    width: 4.5rem;
    height: 50px;
    color: #323234;
    display: flex;
    align-items: center;
    justify-content: center;
    > svg {
        color: #fff;
    }

    @media (max-width: 425px) {
        width: 3rem;
    }
`;
