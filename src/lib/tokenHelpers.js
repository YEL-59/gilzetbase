export const getAccessToken = () => {
    return localStorage.getItem('accessToken');
};

export const setAccessToken = (token) => {
    return localStorage.setItem('accessToken', token);
};

export const clearAccessToken = () => {
    return localStorage.removeItem('accessToken');
};
