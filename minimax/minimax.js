// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

const arr1 = [1, 3, 5, 9, 7];

function miniMaxSum(arr) {
    let max=0;
    let min=0;
    const sortedArr = arr.sort(function(a,b){
        return a-b
    })
    for(let i=0; i<sortedArr.length-1; i++){
        min+=sortedArr[i]
    }
    for(let i=1; i<sortedArr.length; i++){
        max+=sortedArr[i]
    }
    console.log(`${min} ${max}`)
}

miniMaxSum(arr1)