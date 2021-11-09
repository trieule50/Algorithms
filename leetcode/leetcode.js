//binary search - if target in found in nums return index of target, else return -1
// success - runtime is 68 ms, faster than 97.64% of javascript online search.
var search = function(nums, target) {
    if(nums.includes(target)){
        return nums.indexOf(target);
    }else{
        return -1
    }
}

//Two Sum -
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

var twoSum = function(nums, target) {
    
    for(let i = 0; i < nums.length; i++){
        for(let j=i+1; j < nums.length; j++){
            if(nums[i] + nums[j] === target){
                return [i, j]
            }
        }
    }
  
};

