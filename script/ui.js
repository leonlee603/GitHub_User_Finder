class UI {
    constructor() {
        this.profile = document.getElementById('profile');
        this.notFound = document.getElementById('notFound');
    }

    // Show GitHub user profile
    showProfile(user) {
        const created_at = user.created_at.slice(0, 10);
        this.profile.innerHTML = `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                        <img class="img-fluid mb-2" src="${user.avatar_url}" alt="user icon">
                        <a class="btn btn-dark btn-block" href="${user.html_url}" target="_blank">View Profile</a>
                    </div>
                    <div class="col-md-9">
                        <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                        <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
                        <span class="badge badge-success">Followers: ${user.followers}</span>
                        <span class="badge badge-info">Following: ${user.following}</span>
                        <br><br>
                        <ul class="list-group">
                            <li class="list-group-item">Company: ${user.company}</li>
                            <li class="list-group-item">Website/Blog: <a href="${user.blog}" target="_black">${user.blog}</a></li>
                            <li class="list-group-item">Location: ${user.location}</li>
                            <li class="list-group-item">Member Since: ${created_at}</li>
                        </ul>
                    </div>
                </div> 
            </div>
            <h3 class="page-heading mb-3 text-center"><i class="fas fa-book"></i> Latest Repositories</h3>
            <div id="repos"></div>
        `;
    }

    // Render the user's latest 5 repositories
    showRepos(repos) {
        let output = '';
        repos.forEach(repo => {
            output += `
                <div class="card card-body mb-2">
                    <div class="row">
                        <div class="col-md-6">
                            <a href="${repo.html_url}" target="_blank"><i class="fas fa-book"></i> ${repo.name}</a>
                        </div>
                        <div class="col-md-6">
                            <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
                            <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
                            <span class="badge badge-success">Forks: ${repo.forks_count}</span>
                        </div>
                    </div>
                </div>
            `
        });
        // Render the result to repos div
        document.getElementById('repos').innerHTML = output;
    }

    // Show NOT FOUND alert
    showAlert() {
        this.clearAlert();
        this.notFound.style.visibility = "visible";
    }
    // Clear the NOT FOUND alert
    clearAlert() {
        this.notFound.style.visibility = "hidden";
    }

    // Clear GitHub user profile
    clearProfile() {
        this.profile.innerHTML = '';
    }

    // Copyright year at footer
    getYear() {
        const date = new Date();
        const year = date.getFullYear();
        return year;
    }
}