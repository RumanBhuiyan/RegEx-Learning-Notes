// validating email 
let regex = /^([a-z]{1,}[-_.]?\S*)@(gmail|yahoo|cloud|amazon)\.(com|in|guru|ca)$/g;

console.log(regex.test("steve_austin@gmail.com"))

// validating numbers like 234-543-2345   3digits-3digits-4digits
let regex2 = /(^\d{3})-(\d{3})-(\d{4}$)/g;
let regex3 = /^\d{3}-\d{3}-\d{4}$/g; // does the same job

console.log(regex2.test("123-321-4456"))
console.log(regex3.test("123-321-4456"))

// validating Date  N.B: make your global flag off 
let regex4 = /^(\d{1,2})\/(\d{1,2})\/(\d{2,4})|(\d{1,2})-(\d{1,2})-(\d{2,4})|(\d{1,2})\.(\d{1,2})\.(\d{2,4})$/;

console.log(regex4.test('18/04/2021'))
console.log(regex4.test("18-04-2021"));
console.log(regex4.test("18.04.2021"));