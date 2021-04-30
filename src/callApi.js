import jwtDecode from "jwt-decode";

export async function callApi(url, method, body) {
    let accessToken = localStorage.getItem('accessToken');

    let tokenData;

    try {
        tokenData = jwtDecode(accessToken)
    } catch (e) {
        console.warn(e)
    }

    const currentTime = Math.round(Date.now / 1000);
    const diff = tokenData.exp - currentTime;
    const isAccessTokenValid = diff > 60;

    if (!isAccessTokenValid) {
        const refreshToken = localStorage.getItem('refreshToken');
        const response = await fetch('auth/refresh',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(refreshToken)
        });
        const data = await response.json();
        if (response.ok){
            localStorage.setItem('accessToken', data.accessToken);
            localStorage.setItem('refreshToken', data.refreshToken);
            accessToken = data.accessToken;
        } else if (data.error){
            throw new Error(data.error)
        }
    }

    return fetch(url, {
        method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`,
        },
        body: JSON.stringify(body)
    })
}