import { Octokit } from 'octokit';

const octokit = new Octokit({});

const getReadmeAPI = async (chosenRepo) => {
  try {
    const readmeRes = await octokit.request('GET /repos/{owner}/{repo}/readme', {
      owner: chosenRepo.owner.login,
      repo: chosenRepo.name,
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
        accept: 'application/vnd.github.html',
      },
    });
    if (readmeRes.data) return readmeRes.data;
    return null;
  } catch (e) {
    throw new Error(e);
  }
};

const getRepositoriesAPI = async (searchTerm) => {
  try {
    const q = encodeURIComponent(searchTerm);
    const resData = await octokit.request(`GET /search/repositories?q=${q}`, {
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
      },
    });
    if (resData.data) return resData.data.items;
    return [];
  } catch (e) {
    throw new Error(e);
  }
};

export { getRepositoriesAPI, getReadmeAPI };
