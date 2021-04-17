// character class with range
// [abc]d{2} ended with 2 d
// [abc]d{2,5} ended with minimum 2 d's and maximum 5 d's
// [abc]d{2,}  minimum 2 d and maximum number anything can be
// [abc]d{,4} maximum 4 times d but minimum anything can be
// [a-zA-z] starts with any of a-z or A-Z

// valid strings : 123 345 567
// invalid strings : 1 23 34353
let regex = /^[0-9]{3}$/g;
let regex2 = /^[0-9][0-9][0-9]$/g;

console.log(regex.test("12"));

// strings of length 4 5 6
let regex3 = /^[a-z]{4,6}$/g;

console.log(regex3.test("ruman"));

// valid strings : ha haha 
// invalid strings : hahaha hahahaha 
let regex4 = /^(ha){1,2}$/

console.log(regex4.test("ha"))
console.log(regex4.test("hahaha hahahaha"));