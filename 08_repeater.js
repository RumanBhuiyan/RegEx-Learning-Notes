// ? means 0 or 1 occurance
// * means 0 or multiple occurance 
// + menas 1 or multiple occurance

// starts with 0 times or 1 times a and ends with b
let regex = /^a?b$/g
// starts with 0 or multiple occurance of a and ends with b 
let regex2 = /^a*b$/g;
// starts with 1 or multiple occurance of a and ends with b 
let regex3 = /^a+b$/g;

console.log(regex.test('ab'))

// valid website url -> http:facebook.com ,https.facebook.com/home
let regex4 = /^https?:.+\.com\/*.*$/g;
let website = 'http:facebook.com/home'
console.log(regex4.test(website))