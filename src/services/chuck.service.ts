import axios from 'axios';

const BASE_URL = 'https://api.chucknorris.io/jokes';

const getCategories = async () => {
    const response = await axios.get(`${BASE_URL}/categories`);
    return response?.data;
};

const getJokeBySearch = async (search: string) => {
    const response = await axios.get(`${BASE_URL}/search?query=${search}`);
    return response?.data;
};

export { BASE_URL, getCategories, getJokeBySearch };
