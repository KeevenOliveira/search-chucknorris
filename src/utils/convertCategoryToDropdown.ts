const convertCategoryToDropdown = (categories: string[]) => {
    if (!categories.length) {
        return;
    }
    return categories?.map(category => ({
        value: category,
        label: category,
    }));
};

export default convertCategoryToDropdown;
