import styled from 'styled-components';

export const SIZE_ICON = 25;

export const InputSearch = styled.input`
    padding: 1rem;
    outline: none;
    height: 50px;
    width: 40%;
    color: #000;
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
    cursor: pointer;
    border: 2px solid #fff;
    border-radius: 0 1rem 1rem 0;
    width: 4.5rem;
    border-left: none;
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

    &:active {
        border: 3px solid #3578e5;
        color: #3578e5;
    }
`;

export const DropdownContainer = styled.div`
    background: transparent;
    border-radius: 1rem 0 0 1rem;
    border-right: 3px solid #000;
    width: 15%;
    height: 50px;
    color: #323234;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 425px) {
        width: 3rem;
    }
    background: #fff;
`;
