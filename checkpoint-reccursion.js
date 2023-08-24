const word ="mama"
let check =false
function  palindrome(word,check){
     if  (word.length===0 ||word.length===1){
     check= true
        return check
    }
if (word[word.length-1]===word[0]){
        word=word.slice(1,word.length-1)
        check=true
       return palindrome(word,check)
    }
    else {return 'not a palindrome word'
    
}
}
console.log (palindrome(word))