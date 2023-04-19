function logPageSelectWeek(weekNo) {
  model.inputs.logPage.selectedWeek = weekNo;
  updateView();
}

function logPageSelectDay(dayNo) {
  model.inputs.logPage.selectedDay = dayNo;
  updateView();
}

function selectStars(questionIndex, starNo) {
  model.inputs.logPage.answers[questionIndex] = starNo;
  updateView();
}

function saveLog() {
  let userId = model.app.loggedInUser;
  let user = findUser(userId);

  model.log.push({
    whatHaveYouLearnedToday: model.inputs.logPage.whatHaveYouLearnedToday,
    week: model.inputs.logPage.selectedWeek,
    day: model.inputs.logPage.selectedDay,
    answers: [...model.inputs.logPage.answers], // ... = spread operator
    userId: model.app.loggedInUser,
    module: user.currentModule,
  });
  // model.app.currentPage = 'showLogs';
  updateView();
}
