// pipeline (a|b)c accept ac or bc 
let regex = /(boly|holy|tolly|daly)wood/g;
// creating regex using constructor
let regex2 = new RegExp('(boly|holy|tolly|daly)wood')

console.log(regex2.test('bolywood'))
