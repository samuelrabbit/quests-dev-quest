const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    repos: [],
    setInfo(gitHubUser) {
        this.avatarUrl = gitHubUser.avatar_url;
        this.bio = gitHubUser.bio;
        this.name = gitHubUser.name;
        this.userName = gitHubUser.login;
    },
    setRepositories(repositories) {
        this.repositories = repositories;
    },
};

export { user };
