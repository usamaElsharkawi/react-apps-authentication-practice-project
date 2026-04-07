export function getAuthToken(){
    const token = localStorage.getItem('token');
    return token;
}

export function tokenLoader(){
    const token = getAuthToken();
    return token;
}