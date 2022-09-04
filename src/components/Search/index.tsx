import * as React from 'react';
import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

// Services
import { ChuckService } from '../../services';

// Styles
import { InputSearch, SearchComponent, SearchIcon, SIZE_ICON } from './styles';

interface SearchProps {
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const Search: React.FC<SearchProps> = ({ handleSubmit }) => {
    const [search, setSearch] = useState<string>();

    return (
        <SearchComponent
            name="search-form"
            onSubmit={env => handleSubmit(env)}
            data-testid="search"
        >
            <SearchIcon type="submit">
                <AiOutlineSearch size={SIZE_ICON} />
            </SearchIcon>
            <InputSearch
                value={search}
                onChange={event => setSearch(event.target.value)}
                placeholder="Search"
                type={'search'}
            />
        </SearchComponent>
    );
};

export default Search;
