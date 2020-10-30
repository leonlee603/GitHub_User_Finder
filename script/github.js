class Github {
    constructor() {
        this.client_id = '6d1076a45de22e806989';
        this.client_secret = '5b5254166fe1dbbc6977246c6b6d0066df7e24dc';
        this.repos_count = 5; // Set the number of repositories to be shown on page
        this.repos_sort = 'created: asc'; // Sort the repositories based on the created date
    }

    async getUser(user) {
        // Fetch user's profile data from GitHub API
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profileData = await profileResponse.json();
        // Fetch user's latest 5 repositories from GitHub API
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repoData = await repoResponse.json();
        // return the value as an object
        return {
            profile: profileData,
            repos: repoData
        };
    }
} 