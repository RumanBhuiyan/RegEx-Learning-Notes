// (?=\.com) is look ahead group here which search the pattern before it
// and return the matched portion not whole matched string
let regex = /(http|https)?:?(\/\/)?(\w)+(?=\.com)/g;

// valid urls : http://example.com https://example.com youtube.com
console.log(regex.test("https:youtube.com"));

// checking a url is valid or not without look ahead group
let regex2 = /^(http|https)?:?(\/\/)?(\w+.)?(\w+)(\.com)(\/)?(\w*)$/g;

console.log(regex2.test("https://www.facebook.com/"));

// checking a password is containing a-z and A-Z and 0-9 or not 
let regex3 = /^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$/g;

console.log(regex3.test('Abcd1234'))

// Name checking using negative look ahead   
let regex4 = /^(?!.*[\d]).*$/g;

console.log(regex4.test('ruman076'))
