function countTinyPairs(a, b, k) {
    let tiny = 0;
    b.reverse();
    for(let i = 0; i < a.length; i++){
        if((parseInt(`${a[i]}`+`${b[i]}`)) < k){
            tiny+=1
        }
    }
    return tiny
}

countTinyPairs([1,2,3,7], [2,1,0,1], 31)