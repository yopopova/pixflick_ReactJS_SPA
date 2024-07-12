import * as request from "../lib/request";

// const baseUrl = 'http://localhost:3030/jsonstore/movies';
const baseUrl = 'http://localhost:3030/data/movies';

export const getAll = async () => {
    const result = await request.get(baseUrl);

    // return Object.values(result);
    return result;
}

export const getOne = async (movieId) => {
    const result = await request.get(`${baseUrl}/${movieId}`);

    return result;
}

export const create = async (movieData) => {
    const result = await request.post(baseUrl, movieData);

    return result;
}

export const edit = async (gameId, movieData) => {
    const result = await request.put(`${baseUrl}/${gameId}`, movieData);

    return result;
}