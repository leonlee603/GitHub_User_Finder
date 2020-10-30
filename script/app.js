// Create instance from Github class and UI class
const github = new Github();
const ui = new UI();

// Create event listener for the input field
const searchUser = document.getElementById('searchUser');
searchUser.addEventListener('keyup', (e) => {
    const userText = e.target.value;
    if (userText !== '') {
        github.getUser(userText)
            .then(data => {
                if(data.profile.message === 'Not Found') {
                    // Show alert
                    ui.showAlert();
                    ui.clearProfile();
                } else {
                    // Show profile
                    ui.clearAlert();
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }
            })
    } else {
        // Clear profile
        ui.clearAlert();
        ui.clearProfile();
    }
})

// Footer copyright
const copyright = document.getElementById('copyright').textContent = `Copyright © ${ui.getYear()} All rights reserved | Leon Lee`;