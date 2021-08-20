function checkPalindrome(inputString) {
    const lowercase = inputString.toLowerCase()
    const reverseString = lowercase.split("").reverse().join("")
    if(lowercase === reverseString){
        return true
    }else{
        return false
    }
}