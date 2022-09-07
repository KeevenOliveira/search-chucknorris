import styled from 'styled-components';

export const CardContainer = styled.main`
    background-color: #292d3e;
    max-width: 500px;
    margin: 1rem;
    border-radius: 5px;
    padding: 1rem;
`;

export const CardContent = styled.a`
    text-decoration: none;
    color: #fff;
    h1:first-child,
    h1:last-child {
        font-size: 40px;
    }
    h1:first-child {
        text-align: start;
    }
    h1:last-child {
        text-align: right;
    }
`;
