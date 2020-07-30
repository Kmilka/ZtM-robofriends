export async function robotsAPI() {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
}