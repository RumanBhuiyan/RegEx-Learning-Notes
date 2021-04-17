// Some issue about //g flag :
// if you keep g flag on then it starts searching next string at last index
// which means index after getting first match.So at the time of checking
// individual check of string keep g flag off

// valid  strings :  foobar fooabar fooaabar fooaaaaabar
// invalid strings : fooxxbar 
let text = 'foobar fooabar fooaabar fooaaaabar fooxxbar'

//const regex = /(foo)(a)*(bar)/g;
const regex = /(foo)(a)*(bar)/g;

console.log(text.match(regex)) // returns array of all mathched strings
console.log(text.search(regex))// returns index of matched string or -1
console.log(regex.test('fooxbar')) // rturns true or false string matched or not

let replacedString = ''

replacedString = text.replace(regex, '00000')
console.log(replacedString)

// split method splits basis on regex pattern
let paragraph = 'All that glitters is not gold'
let regex2 = /\s/g

let words = paragraph.split(regex2)

console.log(words)