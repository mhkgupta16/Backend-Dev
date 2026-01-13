const utils = require("./stringUtils");

const text = "hello node";

console.log("Capitalized:", utils.capitalize(text));
console.log("Reversed:", utils.reverseString(text));
console.log("Vowel Count:", utils.countVowels(text));
