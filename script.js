function makeid(l) {
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < l; i++) { // Changed from 'length' to 'l'
        let randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }
    return result;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
