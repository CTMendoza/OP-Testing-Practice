// takes a string and returns it with the first character capitalized.
function capitalize(word) {
let firstLetter = word.charAt(0)
return firstLetter.toUpperCase() + word.substring(1).toLowerCase()
}

export {capitalize}