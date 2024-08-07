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

export const getUserMovies = async (userId) => {
    const result = await request.get(baseUrl);

    const userMovies = result.filter((movie) => movie._ownerId === userId);

    return userMovies;
}

export const getLatest = async () => {
    const result = await request.get(`${baseUrl}?sortBy=_createdOn%20desc&offset=0&pageSize=3`);

    return result;
}

export const create = async (movieData) => {
    const result = await request.post(baseUrl, movieData);

    console.log(result);
    return result;
}

export const edit = async (movieId, movieData) => {
    const result = await request.put(`${baseUrl}/${movieId}`, movieData);

    return result;
}

export const remove = async (movieId) => request.del(`${baseUrl}/${movieId}`);