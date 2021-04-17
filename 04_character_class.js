// [abc] means starts with a or b or c
// valid string : foo coo loo 
// invaid string : moo noo doo 
let text = 'noo'
// choose those strings which start with f or c or l 
let regex = /[fcl]o{2}/g
// choose those strings which doesn't start with f or c or l 
let regex2 = /[^fcl]o{2}/g
// character class with range 
// [abc]d{2} ended with 2 d
// [abc]d{2,5} ended with minimum 2 d's and maximum 5 d's
// [abc]d{2,}  minimum 2 d and maximum number anything can be
// [abc]{,4} maximum 4 times but minimum anything can be 
// [a-zA-z] starts with any of a-z or A-Z 
let regex3 = /food{2}/g 
let regex4 = /food{1,3}$/g
let regex5 = /food{1,}/g

console.log(regex3.test('fooddddddddddddd'))
console.log(regex4.test('fooddddddddddd'))
console.log(regex5.test('foodddddddddddddd'))
// console.log(regex.test(text))
// console.log(regex2.test(text))