import IResponseChuckQueryData from '../types/IResponseChuckQueryData';

export const filterCategory = (
    category: string | null,
    data: IResponseChuckQueryData | null,
) => {
    if (!category) {
        return data;
    }
    if (!data) {
        throw new Error('Data is required');
    }
    return data.result.filter(item => item.categories.includes(category));
};
