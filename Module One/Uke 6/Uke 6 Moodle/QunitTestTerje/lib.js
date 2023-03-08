function fixText(inputText) {
    let txt = inputText;
    let txt2 = txt.trim();
    let result = txt2.charAt(0).toUpperCase() + txt2.slice(1).toLowerCase();
    return result;
}