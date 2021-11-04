//binary search - if target in found in nums return index of target, else return -1

// success - runtime is 68 ms, faster than 97.64% of javascript online search.
var search = function(nums, target) {
    if(nums.includes(target)){
        return nums.indexOf(target);
    }else{
        return -1
    }
}
