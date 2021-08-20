function plusMinus(arr) {
    let positiveSum = 0;
    let negativeSum = 0;
    let zeroSum = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            positiveSum += 1
        }else if(arr[i] < 0){
            negativeSum += 1
        }else{
            zeroSum += 1
        }
    }
    console.log((positiveSum/arr.length).toFixed(6) + "\n" + (negativeSum/arr.length).toFixed(6) + "\n" + (zeroSum/arr.length).toFixed(6))
}