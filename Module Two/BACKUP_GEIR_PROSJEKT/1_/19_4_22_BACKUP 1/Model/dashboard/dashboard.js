function updateDashboard(){
  console.log("#DASH_UPDATED")
    let html = /*HTML*/`
    <div class="navBar dashboard">
        <div class="navBarItem" onclick=" document.getElementById('app').innerHTML = updateDashboard();">Hjem</div>
        <div class="navBarItem">Temaer</div>
        <div class="navBarItem">Meldinger</div>
        <div>
          <div class="navBarUser">${model.app.loggedInUser.firstname} ${model.app.loggedInUser.lastname}</div>
          <div class="navBarUserClassID">${model.app.loggedInUser.klasse}</div>
        </div>
        <div class="navBarItem logOutBtn" onclick="logOut()">Log ut</div>
        <button class="navBarItem" onclick="updateViewLoginPage()">Login Page</button>
        <button  class="navBarItem" onclick="updateViewLogPage()">Logg Page</button>
        
        </div>
        `;
return html;
}

function handleMainDashView(){

  return html;
}

function findUser(userID) {
    for (let user of model.users) {
      if (user.userId == userID) {
        return user;
      }
    }
    return "";
  }
  function logOut () {
    model.app.loggedInUser = false;
    updateViewLoginPage(); // skal endres til currentPage i ferdig produkt.
    }