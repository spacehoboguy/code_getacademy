function updateViewTopic1(){
    let html = /*html*/ `
   <h2>${model.oppgaver[0].Tema}</h2>
    <div>
        <div>
        <h4>${model.oppgaver[0].Tittel}
        </h4> </div>
        <div>Informasjon/video/linker til trygghet</div>
    </div>
    
    <div>
        <div>${model.oppgaver[1].Tittel}</div>
        <div>${model.oppgaver[1].Tekst}<div>

        <div>${model.oppgaver[2].Tittel}<div>
        <div>${model.oppgaver[2].Tekst}<div>
            <input id="t1s1" type="checkbox">
            <label for="t1s1">${model.oppgaver[2].SvarAlt[0]}</label>
            <input id="t1s2" type="checkbox">
            <label for="t1s2">${model.oppgaver[2].SvarAlt[1]}</label>
            <input id="t1s3" type="checkbox">
            <label for="t1s3">${model.oppgaver[2].SvarAlt[2]}</label>
            <input id="t1s4" type="checkbox">
            <label for="t1s4">${model.oppgaver[2].SvarAlt[3]}</label>
            </div>
        </div>
    <div>
        <div>${model.oppgaver[3].Tittel}</div>
        <div>${model.oppgaver[3].Tekst}<div>
        <textarea name="refleksjonsOppgaveTema1" id="refleksjonsOppgaveTema1" cols="30" rows="10"></textarea>
        <button onclick="">Lagre</button>
    `; 
   return html;
};
