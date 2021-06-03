const largestNumber = (num) => {
    if(num === 0){
        return 0;
    }else{
    const myString = '9';
    let stringNum = myString.repeat(num);
    return parseInt(stringNum);
    }
}

console.log(largestNumber(5));
