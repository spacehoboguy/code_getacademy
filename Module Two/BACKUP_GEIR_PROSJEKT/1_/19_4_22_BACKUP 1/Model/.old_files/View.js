function mainView() {
  let html = "";

  if (model.currentPage == "loginPage") html = loginPage();
  if (model.currentPage == "loggPage") html = updateViewLogPage();
  if (model.currentPage == "newUserPage") html = newUserPage();
  document.getElementById("app").innerHTML = html;
}

function byttSide(denneSiden) {
  model.currentPage = denneSiden;
  hovedSide();
}

// ----------------------------------------------------------------------------

function mainView() {
  let html = "";

  if (model.currentPage == "Hovedside") html = hovedView();
  if (model.currentPage == "Innloggingside") html = innloggingView(); // finnes ikke
  if (model.currentPage == "Produktside") html = produktView(); // finnes ikke
  if (model.currentPage == "Brukersideside") html = brukerView(); // finnes ikke

  document.getElementById("app").innerHTML = html;
}

function hovedView() {
  LeggeTilNoe();
  let html = "";

  html += `${model.lagtTilNoe} masse inni her ${underHovedView()}`;

  return html;
}

function underHovedView() {
  let html = "";

  html += `masse inni her`;

  return html;
}

function LeggeTilNoe() {
  model.lagtTilNoe = "hei";
}
