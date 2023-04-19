/* document.getElementById('app').innerHTML = ProgressionListBars();
 */

function ProgressionListBars() {
    let html = ``;
    for (let i = 0; i < model.users.length; i++) {
        html += `
    <label for="bar${i}">@Arne</label>
    <progress id ="bar${i}" value="0" max"300"></progress>`
    }
    return html;
}