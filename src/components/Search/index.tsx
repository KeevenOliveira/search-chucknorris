import * as React from 'react';
import { useState, useEffect } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { createBrowserHistory } from 'history';
import Select from 'react-select/creatable';
import { toast } from 'react-toastify';

// Services
import { ChuckService } from '../../services';

// Styles
import {
    InputSearch,
    SearchComponent,
    SearchIcon,
    DropdownContainer,
    SIZE_ICON,
} from './styles';

// Utils
import { convertCategoryToDropdown } from '../../utils';

// Types
import ISearchProps from '../../types/ISearchProps';

interface ISelectOption {
    value: string;
    label: string;
}

const Search: React.FC<ISearchProps> = ({ handleSubmit }) => {
    const history = createBrowserHistory();

    const [categories, setCategories] = useState<ISelectOption[]>([]);
    const [search, setSearch] = useState<string>();
    const [selectedCategory, setSelectedCategory] = useState<ISelectOption>();

    useEffect(() => {
        const params = new URLSearchParams(history.location.search);
        const query = params.get('query');
        if (query) {
            setSearch(query);
        }
        async function getCategories() {
            try {
                const result = await ChuckService.getCategories();
                const categoriesConverted = convertCategoryToDropdown(result);
                setCategories(categoriesConverted as any);
            } catch (error) {
                toast.error('Error to get categories');
            }
        }
        getCategories();
    }, []);

    return (
        <SearchComponent
            name="search-form"
            onSubmit={env => handleSubmit(env, search, selectedCategory?.value)}
            data-testid="search"
        >
            <DropdownContainer>
                <Select
                    options={categories ?? []}
                    onChange={e => {
                        setSelectedCategory(e as ISelectOption);
                    }}
                />
            </DropdownContainer>
            <InputSearch
                value={search}
                onChange={event => {
                    setSearch(event.target.value);
                    if (!event.target.value) {
                        history.push('/');
                    }
                }}
                placeholder="Search"
                type={'search'}
            />
            <SearchIcon type="submit">
                <AiOutlineSearch size={SIZE_ICON} />
            </SearchIcon>
        </SearchComponent>
    );
};

export default Search;
