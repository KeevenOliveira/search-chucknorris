import axios from 'axios';

const BASE_URL = 'https://api.chucknorris.io/jokes';

export const getCategories = async () => {
    const response = await axios.get(`${BASE_URL}/categories`);
    return response.data;
};

export const getRandomJoke = async (category: string) => {
    const response = await axios.get(`${BASE_URL}/random?category=${category}`);
    return response.data;
};

export const getJokeBySearch = async (search: string) => {
    const response = await axios.get(`${BASE_URL}/search?query=${search}`);
    return response.data;
};

export const getJokeById = async (id: string) => {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data;
};

export const getJokeByRandom = async () => {
    const response = await axios.get(`${BASE_URL}/random`);
    return response.data;
};
