import fetch from "node-fetch";

async function fetchUserById(userId) {
    const url = `https://30b9-77-79-243-52.ngrok.io/users`
    const response = await fetch(url);
    const text = await response.text();
    console.log(text);
}

fetchUserById(10);
fetchUserById(4);