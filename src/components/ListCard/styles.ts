import styled from 'styled-components';

export const ListCardContainer = styled.main`
    border: 2px solid red;

    main + main {
        margin-top: 2rem;
    }
`;
