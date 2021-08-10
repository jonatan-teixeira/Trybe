//1 
function verificaPalindromo(str) {
    let splitArr = str.split('');
    let reverseArr = splitArr.reverse();
    let joinArr = reverseArr.join('');
    if (str === joinArr) {
        return true;
    } else {
        return false
    }
};

verificaPalindromo('arara');
verificaPalindromo('desenvolvimento');
verificaPalindromo('natan');
verificaPalindromo('nohan');

//2

