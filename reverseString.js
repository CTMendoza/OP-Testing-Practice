//takes a string and returns it reversed.
function reverseString(word) {
let wordArray = word.split("")
let reverseWordArray= wordArray.reverse()
let joinArray = reverseWordArray.join("")
return joinArray
}

export {reverseString}