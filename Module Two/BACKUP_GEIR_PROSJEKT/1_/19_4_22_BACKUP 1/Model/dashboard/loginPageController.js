function logIn() {
  console.log("#LOGIN_RUN")
  model.inputs.loginPage.errorMessage = "";
  if (
    model.inputs.loginPage.userId == findUser(model.inputs.loginPage.userId).userId &&
    model.inputs.loginPage.password == findUser(model.inputs.loginPage.userId).password //!log in eksisterende bruker
  ) {
    model.app.loggedInUser = findUser(model.inputs.loginPage.userId);
    updateDashboard();
    document.getElementById('app').innerHTML = updateDashboard();
    model.inputs.loginPage.errorMessage = "";
    console.log("logget inn som -->", model.app.loggedInUser.userId) //? CONSOLE.LOG
  } if (
    model.inputs.loginPage.userId == findUser(model.inputs.loginPage.userId).userId &&
    model.inputs.loginPage.password != findUser(model.inputs.loginPage.userId).password //!feil brukernavn eller pass
    ) {
    model.inputs.loginPage.errorMessage = "feil brukernavn eller passord.";
    console.log("feil brukernavn eller passord",) //? CONSOLE.LOG
    updateViewLoginPage();
  } if (
    model.inputs.loginPage.userId != findUser(model.inputs.loginPage.userId).userId
  )
  {
    console.log("ingen bruker funnet.",) //? CONSOLE.LOG 
    model.inputs.loginPage.errorMessage = "ingen bruker funnet."; //!ingen bruker funnet
    updateViewLoginPage();
  }  
}



/* 
function newLogIn(inputName) {
  if (inputName == findUser(inputName)) {
    console.log(inputName, "if yes");
    goToMenuPage();
  } else 
}
 */
