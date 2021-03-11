class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }

  // Display profile in UI
  showProfile(user) {
    this.profile.innerHTML = `
      <div class="card ">
        <div class="row">
          <div class="col-md-3">
            <img class="img" src="${user.avatar_url}">
           
             <div class = "button">
               <a href="${user.html_url}" target="_blank" class="btn">View Profile</a>
             </div>
          </div>
         
          <div class="col">

            <div class =  "button1">
              <span class="badge1">Public Repos: ${user.public_repos}</span>
            </div>
           
            <div class =  "button1">
             <span class="badge2">Public Gists: ${user.public_gists}</span>
            </div>

            <div class =  "button1">
             <span class="badge3">Followers: ${user.followers}</span>
            </div>

            <div class =  "button1">
             <span class="badge4">Following: ${user.following}</span>
            </div>
           
              
            
         
           
            <br><br>
            <ul class="list-group">
              <li class="list">Company: ${user.company}</li>
              <li class="list">Website/Blog: ${user.blog}</li>
              <li class="list">Location: ${user.location}</li>
              <li class="list">Member Since: ${user.created_at}</li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class="page">Latest Repos</h3>
      <div id="repos"></div>
    `;
  }

  // Show user repos
  showRepos(repos) {
    let output = "";

    repos.forEach(function (repo) {
      output += `
        <div class="card">
          <div class="row">
            <div class="col">
              <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </div>
            <div class="col">

            <div class = "pad">
             <span class="badgea">Stars: ${repo.stargazers_count}</span>
            </div>

            <div class = "pad">
             <span class="badgeb ">Watchers: ${repo.watchers_count}</span>
            </div>

            <div class = "pad">
             <span class="badgec">Forks: ${repo.forms_count}</span>
            </div>
              
             
               

            </div>
          </div>
        </div>
      `;
    });

    // Output repos
    document.getElementById("repos").innerHTML = output;
  }

  // Show alert message
  showAlert(message, className) {
    // Clear any remaining alerts
    this.clearAlert();
    // Create div
    const div = document.createElement("div");
    // Add classes
    div.className = className;
    // Add text
    div.appendChild(document.createTextNode(message));
    // Get parent
    const container = document.querySelector(".searchContainer");
    // Get search box
    const search = document.querySelector(".search");
    // Insert alert
    container.insertBefore(div, search);

    // Timeout after 3 sec
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  // Clear alert message
  clearAlert() {
    const currentAlert = document.querySelector(".alert");

    if (currentAlert) {
      currentAlert.remove();
    }
  }

  // Clear profile
  clearProfile() {
    this.profile.innerHTML = "";
  }
}
