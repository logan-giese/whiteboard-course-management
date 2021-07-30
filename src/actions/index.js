export const login = (user) => {
    return {
        payload: user,
        type: 'LOGIN'
    };
};

export const logout = () => {
    return {
        type: 'LOGOUT'
    };
};