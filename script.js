const button = document.querySelector('#gen-password');
const passwordLengthField = document.querySelector('input[name=passwordLength]');
const upperCaseField = document.querySelector('input[name=upperCase]');
const lowerCaseField = document.querySelector('input[name=lowerCase]');
const numbersField = document.querySelector('input[name=numbers]');
const symbolsField = document.querySelector('input[name=symbols]');

passwordLengthField.addEventListener('mousemove', () => {
    document.querySelector('#len').innerHTML = passwordLengthField.value;
})

button.addEventListener('click', () => {
    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*.';

    const options = {
        length: passwordLengthField.value,
        upperCase: upperCaseField.checked,
        lowerCase: lowerCaseField.checked,
        numbers: numbersField.checked,
        symbols: symbolsField.checked,
    };

    let seed = '';

    if (options.upperCase) {
        seed += upperCase;
    }
    if (options.lowerCase) {
        seed += lowerCase;
    }
    if (options.numbers) {
        seed += numbers;
    }
    if (options.symbols) {
        seed += symbols;
    }
    if (seed == '') {
        alert('You must select at least 1 type of character');
        return;
    }

    // generate random up to the length of the entire seed
    let output = '';
    for (let i = 0; i < options.length; i++) {
        const rand = Math.floor(Math.random() * seed.length);
        output
            += seed[rand];
    }
    alert(output);
    $('.alert').alert()
});

