import React from 'react';

import ISelectOption from '../types/ISelectOption';

const convertCategoryToDropdown = (
    categories: string[],
): React.SetStateAction<ISelectOption[]> => {
    if (!categories.length) {
        return [];
    }
    return categories?.map(category => ({
        value: category,
        label: category,
    }));
};

export default convertCategoryToDropdown;
