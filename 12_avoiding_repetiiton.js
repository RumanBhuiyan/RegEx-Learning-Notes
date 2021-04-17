// \B means bonded by word characters [a-zA-Z0-9]
// \b menas not bounde by word characters
let regex1 = /\Bda\B/g;
let regex2 = /\b234/g;

console.log(regex1.test("Tuesday"));
console.log(regex2.test("-234"));

// back reference to any group, it doesn't refer to pattern but same characters
// \1 exact same as previous groups characters
let regex3 = /^(\d{3})-(\1)-(\1)$/g;
let regex4 = /^(?:\d{3})-(\1)-(\1)$/g; // ?: makes group non referencable

console.log(regex3.test("123-123-123"))
console.log(regex4.test("123-123-123"))

