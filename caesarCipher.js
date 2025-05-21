function caesarCipher(word, shift) {
    let newWord = ''
      let i = 0 
    //iterate through each character in word
    while (i < word.length) {
      
        //check if character is a letter (uppercase or lowercase)
        if( (word.charCodeAt(i) >= 65   && word.charCodeAt(i)  <= 90) || ( word.charCodeAt(i) >= 97  && word.charCodeAt(i)  <= 122)) {
           newWord += shiftChar(word[i],shift)
        }
        else { 
            newWord += word[i]
        }
        i++
    }

    return newWord
}

function shiftChar(char, shift) {
     if(char.charCodeAt(0) >=  65  && char.charCodeAt(0) <= 90) {
        return String.fromCharCode(((char.charCodeAt(0) - 65 + shift + 26) % 26)  + 65)
     }
     else if (  char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
        return String.fromCharCode(((char.charCodeAt(0) - 97 + shift + 26) % 26)  + 97)
     }

     return char
}

export {caesarCipher}