class Github {
    constructor() {
        this.cliend_id = 'bc6fdd419c630eaee2c2';
        this.client_secret = '120a4351d2b4b5ba29d60f059a818d13ebea0872';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.cliend_id}&client_secret=${this.client_secret}`);
        const profileData = await profileResponse.json();

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.cliend_id}&cliend_secret=${this.client_secret}`);
        const repoData = await repoResponse.json();

        return {profileData, repoData};
    }
}