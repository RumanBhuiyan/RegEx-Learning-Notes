# MY RegEx-Learning-Notes
## RegEx online Compilers  for Practising i) [Regexpal](https://www.regexpal.com/) ii) [Regexr](https://regexr.com/)

>## Different Methods of Javascript and Python to work on RegEx
>### Javascript Approach
```javascript
      // Some issue about //g flag :
      // if you keep g flag on then it starts searching next string at last index
      // which means index after getting first match.So at the time of checking
      // individual check of string keep g flag off

      // valid  strings :  foobar fooabar fooaabar fooaaaaabar
      // invalid strings : fooxxbar 
      let text = 'foobar fooabar fooaabar fooaaaabar fooxxbar'

      //const regex = /(foo)(a)*(bar)/g;
      const regex = /(foo)(a)*(bar)/g;

      console.log(text.match(regex)) // returns array of all mathched strings
      console.log(text.search(regex))// returns index of matched string or -1
      console.log(regex.test('fooxbar')) // rturns true or false string matched or not

      let replacedString = ''

      replacedString = text.replace(regex, '00000')
      console.log(replacedString)

      // split method splits basis on regex pattern
      let paragraph = 'All that glitters is not gold'
      let regex2 = /\s/g

      let words = paragraph.split(regex2)

      console.log(words)
```

> ### Python Approach
```python
      # valid strings : foobar fooabar fooaabar fooaaaabar
      # invalid strings :  fooxxbar
      import re as regex

      # pattern = '(foo)(a)*(bar)'
      pattern = 'fooa*bar'

      print(regex.search(pattern,'foobar'))  # output for valid string
      print(regex.search(pattern,'fooxbar')) # output for invalid string

      print(regex.match(pattern,'foobar')) # output for vaid strings
      print(regex.match(pattern,'foobxar')) # output for invalid strings

      counter = int(input("how many strings: "))

      while counter :

          text = input('String: ')

          if regex.match(pattern,text):
              print('String is Valid')

          else :
              print('String is Invalid')

          counter -=1

      text  = 'foobar fooabar fooaabar fooaaaabar fooxbar fooxxbar'  
      replacedString = regex.sub(pattern,'00000',text)

      print(replacedString)
```
> ## ? means 0 or 1 times , * means 0 or more occurances , + means 1 or more occurances
```javascript
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
```
> ## Character Class [abc] means a or b or c and [^abc] means not a and not b and not c 
```javascript
      // [abc] means starts with a or b or c
      // valid string : foo coo loo
      // invaid string : moo noo doo
      let text = "noo";
      // choose those strings which start with f or c or l
      let regex = /[fcl]o{2}/g;
      // choose those strings which doesn't start with f or c or l
      let regex2 = /[^fcl]o{2}/g;
      // character class with range
      // [abc]d{2} ended with 2 d
      // [abc]d{2,5} ended with minimum 2 d's and maximum 5 d's
      // [abc]d{2,}  minimum 2 d and maximum number anything can be
      // [abc]{,4} maximum 4 times but minimum anything can be
      // [a-zA-z] starts with any of a-z or A-Z
      let regex3 = /food{2}/g;
      let regex4 = /food{1,3}$/g;
      let regex5 = /food{1,}/g;

      console.log(regex3.test("fooddddddddddddd"));
      console.log(regex4.test("fooddddddddddd"));
      console.log(regex5.test("foodddddddddddddd"));
      // console.log(regex.test(text))
      // console.log(regex2.test(text))

```
> ## Escaping Characters `\.com` tells to escape . as it has special meaning to RegEx
```javascript
      // for escaping special characters that have meaning to Regex use \
      // like . has a meaning to Regex to escape it use \.
      // valid strings : x.y xx.y xx.yy xxx.yyy 
      // invalid strings : xy 
      let regex = /x+\.y+/g

      console.log(regex.test('xxx.yyy'))

      // valid strings : x#y x:y x.y 
      let regex2 = /x[#:.]y/g

      console.log(regex2.test('x#y'))
```
> ## Anchors  ^ means begins with and $ means ends with
```javascript
      // ^ab menas line starts with ab
      // valid strings : foo bar baz , foo baz bar  
      // line starts with foo and any number of characters followed by it accepted
      let regex = /^foo.*/g

      console.log(regex.test('foo bar baz'))

      // strings that ends with bar starting with any characters are accepted
      let regex2 = /.*bar$/g

      console.log(regex2.test('baz foo bar'))
```
> ## Character Class with Range []{ended_with_how_many} []{min,max} []{min,} []{,max}
```javascript
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
```

> ## Repeating Characters
```javascript
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
```
> ## Pipeline 
```javascript
      // pipeline (a|b)c accept ac or bc 
      let regex = /(boly|holy|tolly|daly)wood/g;
      // creating regex using constructor
      let regex2 = new RegExp('(boly|holy|tolly|daly)wood')

      console.log(regex2.test('bolywood'))
```
> ## Capturing Groups
```javascript
      // replacing 1280x720 by 1280 px by 720
      let regex2 = /([0-9]+)x([0-9]+)/g;
      let size = "1280x720";

      console.log(size.replace(regex2, `$1 px by $2`));
      // $1 means replace first group and $2 means second group
      // (first_group)(second_group)(third_group) so create groups in your reges

```
> ## Back reference to groups and avoid repetition of expression
```javascript
      // back reference to any group, it doesn't refer to pattern but same characters
      // \1 exact same as previous groups characters
      let regex3 = /^(\d{3})-(\1)-(\1)$/g;
      let regex4 = /^(?:\d{3})-(\1)-(\1)$/g; // ?: makes group non referencable

      console.log(regex3.test("123-123-123"))
      console.log(regex4.test("123-123-123"))
      
      // back reference to any group, it doesn't refer to pattern but same characters
      // \1 exact same as previous groups characters
      let regex3 = /^(\d{3})-(\1)-(\1)$/g;
      let regex4 = /^(?:\d{3})-(\1)-(\1)$/g; // ?: makes group non referencable

      console.log(regex3.test("123-123-123"))
      console.log(regex4.test("123-123-123"))
```
> ## Bounded by `\B` not Bounded by `\b`
```javascript
      // \B means bonded by word characters [a-zA-Z0-9]
      // \b menas not bounde by word characters
      let regex1 = /\Bda\B/g;
      let regex2 = /\b234/g;

      console.log(regex1.test("Tuesday"));
      console.log(regex2.test("-234"));
```
> ## Look ahead and Not Look Ahead Group 
```javascript
      // (?=\.com) is look ahead group here which search the pattern before it
      // and return the matched portion not whole matched string
      let regex = /(http|https)?:?(\/\/)?(\w)+(?=\.com)/g;

      // valid urls : http://example.com https://example.com youtube.com
      console.log(regex.test("https:youtube.com"));
      
      // Name checking using negative look ahead   
      let regex4 = /^(?!.*[\d]).*$/g;

      console.log(regex4.test('ruman076'))
```
> ## Validating Email 
```javascript
      // validating email 
      let regex = /^([a-z]{1,}[-_.]?\S*)@(gmail|yahoo|cloud|amazon)\.(com|in|guru|ca)$/g;

      console.log(regex.test("steve_austin@gmail.com"))

      // validating numbers like 234-543-2345   3digits-3digits-4digits
      let regex2 = /(^\d{3})-(\d{3})-(\d{4}$)/g;
      let regex3 = /^\d{3}-\d{3}-\d{4}$/g; // does the same job

      console.log(regex2.test("123-321-4456"))
      console.log(regex3.test("123-321-4456"))
```
> ## Validating Date
```javascript
      // validating Date  N.B: make your global flag off 
      let regex4 = /^(\d{1,2})\/(\d{1,2})\/(\d{2,4})|(\d{1,2})-(\d{1,2})-(\d{2,4})|(\d{1,2})\.(\d{1,2})\.(\d{2,4})$/;

      console.log(regex4.test('18/04/2021'))
      console.log(regex4.test("18-04-2021"));
      console.log(regex4.test("18.04.2021"));
```
> ## Validating URL
```javascript
      // checking a url is valid or not without look ahead group
      let regex2 = /^(http|https)?:?(\/\/)?(\w+.)?(\w+)(\.com)(\/)?(\w*)$/g;

      console.log(regex2.test("https://www.facebook.com/"));
```
> ## Checking Password Strength
```javascript
      // checking a password is containing a-z and A-Z and 0-9 or not 
      let regex3 = /^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$/g;

      console.log(regex3.test('Abcd1234'))
```
