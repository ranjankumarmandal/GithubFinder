const github = new Github(); // init class Github here
const ui = new UI();  // init class UI

// search user - event listener
document.getElementById('searchUser').addEventListener('keyup', (e) => {
    const userText = e.target.value;                // get input text

    if(userText !== '') {
        console.log(userText);
        github.getUser(userText)  // make http call
            .then((data) => {
                if(data.message === 'Not Found') {
                    ui.showAlert('User not found'); // show alert
                } else {
                    ui.showProfile(data.profileData);   // show profile
                    ui.showRepos(data.repoData);         // show repo
                }
            });
    } else {
        ui.clearProfile(); // clear profile
    }
});