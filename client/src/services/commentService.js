import * as request from '../lib/request';

// const baseUrl = 'http://localhost:3030/jsonstore/comments';
const baseUrl = 'http://localhost:3030/data/comments';

export const getAll = async (movieId) => {
    const query = new URLSearchParams({
        where: `movieId="${movieId}"`
    });

    const result = await request.get(`${baseUrl}?${query}`); // ?${query}

    // Rewrite this part with query string; temporary solution with jsonstore
    // return Object.values(result).filter(comment => comment.movieId === movieId);

    // return result.filter(comment => comment.movieId === movieId);

    return result;
}

export const create = async (movieId, username, text) => {
    const newComment = await request.post(baseUrl, {
        movieId,
        username,
        text,
    });

    return newComment;
}