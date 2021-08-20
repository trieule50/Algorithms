// Given an array a that contains only numbers in the range from 1 to a.length, find the first duplicate number for which the second occurrence has the minimal index. In other words, if there are more than 1 duplicated numbers, return the number for which the second occurrence has a smaller index than the second occurrence of the other number does. If there are no such elements, return -1

const arr = [10, 6, 8, 4, 9, 1, 7, 2, 5, 3]

function firstDuplicate(a) {
    // for(let i = 0; i < a.length-1; i++){
    //     for(let j = i + 1; j < a.length; j++){
    //         if(a[i] === a[j]){
    //             return a[i]
    //         }
    //     }
    // }
    // return -1
    const memory = {};

    for (let i = 0; i < a.length; i++) {
        if (memory[a[i]] !== undefined) {
        return a[i];
        } else {
        memory[a[i]] = a[i];
        }
    }

  return -1;
}

// console.log(firstDuplicate(arr))

// Given a string s consisting of small English letters, find and return the first instance of a non-repeating character in it. If there is no such character, return '_'.

const str = "abacabad"

function firstNotRepeatingCharacter(s) {
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (s.indexOf(char) == i && s.indexOf(char, i + 1) == -1) {
          return char;
        }
    }
    return "_"
    
}

// console.log(firstNotRepeatingCharacter(str))