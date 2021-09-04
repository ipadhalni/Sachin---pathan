export const login = (username, password) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };

    return fetch(`https://vendor-buyer.herokuapp.com/api/accounts/signin`, requestOptions)
        .then(user => {
            localStorage.setItem('user', JSON.stringify(user));
            return user;
        });
    }