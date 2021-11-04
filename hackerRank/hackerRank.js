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



function lonelyinteger(a) {
    // Write your code here
    for(let i=0; i< a.length; i++){
        if(a.includes(a[i])){
            return a
        }
    }

}

// console.log(lonelyinteger([1,2,3,4,3,2,1]))

// console.log(firstNotRepeatingCharacter(str))

// Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.

const statues1 = [6, 2, 3, 8]

function makeArrayConsecutive2(statues) {
    const sorted = statues.sort((a,b) => a-b)
    let min = sorted[0]
    let max = sorted[sorted.length -1]
    let count = 0;
    for(let i=min; i < max; i++){
        console.log(sorted.indexOf(i))
        if(sorted.indexOf(i) === -1){
            count+=1
        }
    }
    return count
}

// console.log(makeArrayConsecutive2(statues1))


// Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.

const sequence1 = [1, 2, 1, 2]

function almostIncreasingSequence(sequence) {
    let error = 0;
    for(let i = 0; i < sequence.length; i++){
        if(sequence[i] <= sequence[i-1]){
            error++
            if(sequence[i] <= sequence[i-2] && sequence[i+1] <= sequence[i-1]){
                return false;
            }
        }
    }
    return error <= 1
}

// console.log(almostIncreasingSequence(sequence1))

// You are given an n x n 2D matrix that represents an image. Rotate the image by 90 degrees (clockwise).

// const a1 = [[1, 2, 3],
//      [4, 5, 6],
//      [7, 8, 9]]

// function rotateImage(a) {

// }

// console.log(rotateImage(a1))


function mutateTheArray(n,a){
    let arr = []
    for(let i=0; i < a.length; i++){
        for(let j=0; j < n; j++){
            if(!a[i+1]){
                arr.push(a[i])
            }else{
                let b = a[i] + a[i+1]
                console.log(arr.push(b))
            }
        }
    }
    return arr

}

// console.log(mutateTheArray(1,[9]))

let arr2 = [25, 2, 3, 57, 38, 41]

function mostFrequentDigits(a){
    let sorted = a.join('').split('')
    let count = sorted.reduce((counts, num) => {
        counts[num] = (counts[num] || 0) + 1
        return counts
    }, {})
    return count
}

// console.log(mostFrequentDigits(arr2))

const blocks1 = [1,3,1,3,3]

function packBlocks(blocks, height){
    const sorted = blocks.sort((a,b)=> a-b)
    console.log(sorted)
    let length = sorted.length-1
    for(let i = 0; i < length; i++){
        if(length === 1){
            return 
        }
        return sorted[length] + sorted[length-1]
    }
}

// console.log(packBlocks(blocks1, 2))

// Given an array of integers, where all elements but one occur twice, find the unique element.

const ar = [1,2,3,4,3,2,1];

function lonelyinteger(a){
    for(let i = 0; i < a.length-1; i++){
        for(let j=i+1; j < a.length; j++){
            if(a[i] !== a[j]){
                return a[i]
            }
        }
    }
    
}

// console.log(lonelyinteger(ar))


function gameWinner(colors) {
    // Write your code here
    let w = 0;
    let b = 0;
    for(let i = 0; i <= colors.length; i++){
        // console.log(colors[i])
     if(colors[i] === 'w'){
         w++
         console.log(w)
     }else{
         b++
     }   
    }
    if(w >= b){
        return 'wendy'
    }else{
        return 'bob'
    }
}

// console.log(gameWinner('wwwbb'))


// function oddNumbers(l,r){
//     for(let i = l; i <=r; i++){
//         if(i % 2 !== 0){
//             console.log(i)
//         }
//     }
// }

// console.log(oddNumbers(3,9))

function diagonalDifference(arr){
    let a = 0;
    let b = 0;
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(i===j){
                a += arr[i][j];
            }
            if(i + j === arr.length - 1){
                b += arr[i][j]
            }
        }
    }
    return Math.abs(a - b)
}


function maxInversions(arr) {
    // Write your code here
    let count = 0;
    const sortArr = arr.sort(function(a,b){
        return b - a;
    })
    // for(let i = 2; i <= sortArr.length; i++){
    //     if(sortArr[1] > sortArr[i]){
    //         count++

    //     }
    //     return count;
    // }
    for(let i = 0; i <= sortArr.length-2; i++){
        for(let j = 1; j <= sortArr.length-1; j++){
            for(let k = 2; k <= sortArr.length; k++){
                if(sortArr[i] > sortArr[j] && sortArr[j] > sortArr[k]){
                    count++
                }
            }
        }
    }
    return count;
}

// console.log(maxInversions([5,8,6,1,4,5]))


function condense(head){
    // let array = [];
    // for(let i = 0; i <= head.length; i++){
    //     if(!array.includes(head[i])){
    //         array.push(head[i])
    //     }
    // }
    // return array.slice();
    const string = head.toString()
    const unique = [...new Set(string)];
    const array = unique.map(Number);
    const result = array.filter(numbersOnly);
    function numbersOnly(val){
        if(typeof(val) === 'number'){
            return val;
        }
    }

    return result;
    
}

// console.log(condense([8,3,4,3,2,6,1,2,6]))

function isPrime(n){
    let div = []
    if(n <=2){
        return 1
    }else{
        for(let i = 2; i < n; i++){
            if(n % i === 0){
                div.push(i)
                return div[0]
            }
        }
        return 1
    }
    
}

// console.log(isPrime(37961921))

function hackerCards(collection, d){
    // let sortedCor = collection.sort((a,b) => a-b)
    let missingCor = [];
    let result=[];
    for(let i = 1; i < d-1; i++){
        if(!collection.includes(i)){
            missingCor.push(i)
        }
    }
    for(let j = 0; j <= missingCor.length; j++){
        if(d > 0 && d >= missingCor[j]){
            d = d - missingCor[j];
            result.push(missingCor[j])
            console.log(d)
        }
    }
    return result
    
}

console.log(hackerCards([4,6,12,8], 14))