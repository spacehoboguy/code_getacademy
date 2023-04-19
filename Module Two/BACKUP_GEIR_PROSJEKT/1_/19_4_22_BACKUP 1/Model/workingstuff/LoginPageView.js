function updateViewLoginPage() {
    model.inputs.loginPage.userId = "";
    model.inputs.loginPage.password = "";
    console.log("#loginPageView_UPDATED")
  document.getElementById("app").innerHTML = /*HTML*/ `
        Brukernavn:<br/>
        <input 
            type="text" 
            value="${model.inputs.loginPage.userId || ""}"
            oninput="model.inputs.loginPage.userId = this.value"
            /><br/>
        Passord:<br/>
        <input 
            type="password" 
            value="${model.inputs.loginPage.password || ""}"
            oninput="model.inputs.loginPage.password = this.value"
            /><br/>

        <div style="color:red">
            ${model.inputs.loginPage.errorMessage || ""}
        </div>
        <button onclick="logIn()">Logg inn</button>
    
    <button onclick="updateBarView()">Progressbars</button>
        `;
}
