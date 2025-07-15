

// let word1 = 'stop'
// const vogaisArray = ['a', 'e', 'i', 'o', 'u', 'y']

// function translate(word){
//     let wordArray = word.split("")
//     console.log(wordArray);
    
//     wordArray.forEach(letter => {
//        if(wordArray.includes('o')) {
//             console.log(wordArray.indexOf('o'))
//             let index
//        }       

//     });

// }

// translate(word1)
const palavra = "stop";
const vogais = ["a", "e", "i", "o", "u"]

let resultado = '';
for(let i = 0; i < palavra.length; i++){
    const letra = palavra[i];
    if(vogais.includes(letra)){
        resultado = palavra.slice(i) + palavra.slice(0, i) + 'ay';
        break
    }
}
console.log(resultado)

//


function translateWord(word) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
  const lowerCaseWord = word.toLowerCase();

  let firstVowelIndex = -1;
  for (let i = 0; i < lowerCaseWord.length; i++) {
    if (vowels.includes(lowerCaseWord[i])) {
      firstVowelIndex = i;
      break;
    }
  }


  if (firstVowelIndex === -1) {
    return lowerCaseWord + "ay";
  }

  const prefix = lowerCaseWord.substring(0, firstVowelIndex);
  const stem = lowerCaseWord.substring(firstVowelIndex);

  return stem + prefix + "ay";
}

console.log(translateWord('stop'));
