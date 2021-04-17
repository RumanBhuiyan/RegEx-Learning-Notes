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