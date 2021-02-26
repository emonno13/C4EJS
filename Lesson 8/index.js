/**
 * Async
    Ex: http://latentflip.com/loupe/

 */

/**
 * ServerSide - ClientSide
    Ex: https://blog.bitsrc.io/progressive-rendering-for-better-web-app-performance-22db0d2cd80
 */

const baseURL = 'https://5da3320c76c28f0014bbe777.mockapi.io/'

function getUsers() {
    const response = fetch(baseURL+'Users');
    console.log(response);
}      

async function getUsersWithAsync() {
    const response = await fetch(baseURL+'Users/1');
    console.log(await response.json());
} 

const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ 
        name: 'Khanh'
     })
};

addUser() {
    fetch(baseURL+'Users', requestOptions)
        .then(response => response.json())
        .then(data => console.log(data));
}

// getUsers();
// getUsersWithAsync();
