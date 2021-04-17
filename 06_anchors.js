// ^ab menas line starts with ab
// valid strings : foo bar baz , foo baz bar  
// line starts with foo and any number of characters followed by it accepted
let regex = /^foo.*/g

console.log(regex.test('foo bar baz'))

// strings that ends with bar starting with any characters are accepted
let regex2 = /.*bar$/g

console.log(regex2.test('baz foo bar'))