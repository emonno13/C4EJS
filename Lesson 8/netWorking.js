

/**
 * ServerSide - ClientSide
        Ex: https://blog.bitsrc.io/progressive-rendering-for-better-web-app-performance-22db0d2cd80
    Server-side rendering
        https://www.youtube.com/watch?v=0bvo6UKkNDA
    Client-side rendering
        https://www.youtube.com/watch?v=4-Lel1oaV7M
 */


/** Fetch in JS */

const baseURL = 'https://5da3320c76c28f0014bbe777.mockapi.io/'

function getUsers() {
    const response = fetch(baseURL+'Users');
    console.log(response);
}      

async function getUsersWithAsync() {
    const response = await fetch(baseURL+'Users');
    console.log(await response.json());
}

const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ 
        name: 'Khanh'
     })
};

function addUser(){
    // fetch(baseURL+'Users', requestOptions)
    //     .then(response => response.json())
    //     .then(data => console.log(data));
    const response = await fetch(baseURL + 'Users', requestOptions)
    const data = await response.json()
    console.log(data)
}

// getUsers();
getUsersWithAsync();
addUser();