function writeMyName(name) {
    console.log('My name is ' + name);
}

function ofLegalAge(age) {
    if (age >= 18) {
        console.log('You are of legal age')
    } else {
        console.log('You are underage')
    }
}

(function () {
    writeMyName('Xankssss');
    writeMyName('Luffy');
    ofLegalAge(18);
    ofLegalAge(16);
})();