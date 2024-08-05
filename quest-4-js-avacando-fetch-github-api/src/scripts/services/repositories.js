import { baseUrl } from '../variables.js';

async function getRepos(userName) {
    const response = await fetch(`${baseUrl}/${userName}/repos`);
    return await response.json();
}

export { getRepos };
