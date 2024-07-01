const baseUrl = 'http://localhost:3030/jsonstore';

// ADD/CREATE MOVIE
export const create = async (movieData) => {
    const response = await fetch(`${baseUrl}/movies`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(movieData)
    });

    const result = await response.json();
    return result;
}