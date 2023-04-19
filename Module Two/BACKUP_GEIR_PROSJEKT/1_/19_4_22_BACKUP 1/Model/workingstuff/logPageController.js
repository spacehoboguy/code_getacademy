function logPageSelectWeek(weekNo) {
  model.inputs.logPage.selectedWeek = weekNo;
  updateViewLogPage();
}

function logPageSelectDay(dayNo) {
  model.inputs.logPage.selectedDay = dayNo;
  updateViewLogPage();
}

function selectStars(questionIndex, starNo) {
  model.inputs.logPage.answers[questionIndex] = starNo;
  updateViewLogPage();
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
  console.log("#LOG_SAVED")
  console.log(model.log)
  // model.app.currentPage = 'showLogs';
  updateViewLogPage();
}
