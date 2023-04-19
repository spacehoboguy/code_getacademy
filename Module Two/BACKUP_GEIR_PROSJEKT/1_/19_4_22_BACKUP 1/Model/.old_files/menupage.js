function goToMenuPage() {
  document.getElementById("app").innerHTML = /*HTML*/ `
    <div>Hallo, dette er menysiden:</div>
    <button onclick="goToLogPage()">Logg</button>
    <button>Knapp 2</button>
    <button>Knapp 3</button>
    <button>Knapp 4</button>
    <button>Knapp 5</button>
    `;
}
