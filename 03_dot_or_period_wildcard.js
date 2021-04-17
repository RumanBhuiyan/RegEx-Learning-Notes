// . means choose any one character
//testing string: foobar fooabar fooxbar fooaabar fooaaaabar barfoo barxfoo

let text = 'foobar'

// choose any one character followed by foo and ended with bar
let regex = /foo.bar/g
// choose multiple occurances of any characters started with foo and 
// ended with bar  
let regex2 = /foo.*bar/g
// choose string which starts with foo follwed by one or more spaces
//ended with bar  
let regex3 = /foo\s*bar/g

console.log(regex.test(text)) 
console.log(regex2.test(text))
console.log(regex3.test(text))
