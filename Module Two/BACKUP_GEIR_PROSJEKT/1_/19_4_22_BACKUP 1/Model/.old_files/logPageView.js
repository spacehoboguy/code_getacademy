function goToLogPage() {
  model.app.currentPage = "logPage";
  model.inputs.logPage = {
    whatHaveYouLearnedToday: "",
    selectedWeek: 1,
    selectedDay: 1,
    answers: [],
  };
}

function updateViewLogPage() {
  document.getElementById("app").innerHTML = /*HTML*/ `    
        <h2>Logg</h2>
        <div>
            ${createWeeksHtml()}
        </div>
        <div>
            ${createDaysHtml()}
        </div>
        <textarea 
            oninput="model.inputs.logPage.whatHaveYouLearnedToday=this.value"
            >${model.inputs.logPage.whatHaveYouLearnedToday}</textarea>
        <div>
            ${createQuestionsHtml()}
        </div>
        <button onclick="saveLog()">Lagre</button>
    `;
}

function createWeeksHtml() {
  let html = "";
  for (let weekNo = 1; weekNo < 9; weekNo++) {
    let style =
      model.inputs.logPage.selectedWeek == weekNo
        ? "background-color: orange"
        : "";
    html += /*HTML*/ `
            <button 
                onclick="logPageSelectWeek(${weekNo})"
                style="${style}"
                >
                Uke ${weekNo}
            </button>
        `;
  }
  return html;
}

function createDaysHtml() {
  let html = "";
  for (let dayNo = 1; dayNo < 6; dayNo++) {
    // let style = model.inputs.logPage.selectedDay == dayNo ? 'background-color: lightgreen' : '';
    let style = "";
    if (model.inputs.logPage.selectedDay == dayNo)
      style = "background-color: lightgreen";
    html += /*HTML*/ `
            <button 
                onclick="logPageSelectDay(${dayNo})"
                style="${style}"
                >
                Dag ${dayNo}
            </button>
        `;
  }
  return html;
}

function createQuestionsHtml() {
  let html = "";
  for (
    let questionIndex = 0;
    questionIndex < model.mainQuestions.length;
    questionIndex++
  ) {
    let question = model.mainQuestions[questionIndex];
    let currentValue = model.inputs.logPage.answers[questionIndex] || 5;
    let starsHtml = "";
    for (let starNo = 1; starNo < 10; starNo++) {
      starsHtml += /*HTML*/ `
                <button                     
                    onclick="selectStars(${questionIndex}, ${starNo})">
                    ${starNo <= currentValue ? "★" : "☆"}
                </button>
            `;
    }
    html += /*HTML*/ `
            <b>${question}</b><br/>
            <div>
                ${starsHtml} (${currentValue}/9)
            </div>
        `;
  }
  return html;
}

// if( sånn og sånn) {
//     a = 1;
// } else {
//     a = 2;
// }

// a = sånn og sånn ? 1 : 2;
