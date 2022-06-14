var letter = prompt('Le írja soronként a betűket');
for (var i = 0; i < letter.length; i++) {
    console.log(letter[i]);
  }





  function reverseString(str) {

    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

const string = prompt('Visszafele írja ki');

const result = reverseString(string);
console.log(result);

let count = prompt('Megszámolja a betűket')
let letterCount = count.split(/\W/).join('').length

console.log(letterCount + " " + count)





let szam = prompt('Írj be egy számot')

function oddSum(n) {
    var sumSoFar = 0;
    var currentNumber = 1;
    while (currentNumber<=n) {
        if(currentNumber % 2 == 1 ){
            sumSoFar += currentNumber;
        }
        currentNumber += 1;
    }
    return sumSoFar;
}
var error = 'sfd';
if(szam===error){
    alert('Invalid number')
}
console.log(oddSum(szam));