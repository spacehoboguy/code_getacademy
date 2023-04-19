
let personer = ['Alexander', 'Bettina', 'Marlene', 'Philip', 'Sebastian', 'Sandra'];
let klasse = ['Start IT', 'Get Prepared', 'Get IT']


function updateView() {
    let html = "";
    for (let i = 0; i < personer.length; i++) {
        html += /*HTML*/`
     <ul>
        ${personer[i]} ${klasse[i]}
        <button onclick="fremgang(${i})">Se fremgang</button>
        <button onclick="mld(${i})">Send melding</button>
        <button onclick="rediger(${i})">Rediger profil</button>
    </ul>
    `;
    }
    return html;
}