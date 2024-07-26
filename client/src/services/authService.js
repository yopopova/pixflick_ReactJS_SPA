import * as request from '../lib/request';

const baseUrl = 'http://localhost:3030/users'; 

export const login = async (email, password) => {
    const result = await request.post(`${baseUrl}/login`, {
        email,
        password,
    });

    // console.log(result);
    console.log(result.username);

    return result;
}

export const register = async (username, avatar, email, password) => request.post(`${baseUrl}/register`, {
    // Here we can add input fields like username and avatar!!!
    username,
    avatar,
    email,
    password,
});

export const logout = () => request.get(`${baseUrl}/logout`);