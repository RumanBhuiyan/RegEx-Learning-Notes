// for escaping special characters that have meaning to Regex use \
// like . has a meaning to Regex to escape it use \.
// valid strings : x.y xx.y xx.yy xxx.yyy 
// invalid strings : xy 
let regex = /x+\.y+/g

console.log(regex.test('xxx.yyy'))

// valid strings : x#y x:y x.y 
let regex2 = /x[#:.]y/g

console.log(regex2.test('x#y'))
