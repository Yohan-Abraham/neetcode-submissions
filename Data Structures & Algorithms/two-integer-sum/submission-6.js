class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
       let map = new Map();

       for(let j = 0; j < nums.length; j++){
            map.set(nums[j], j);
       }

       for(let i = 0; i < nums.length; i++){
            const required = target - nums[i];

            if(map.has(required) && map.get(required) != i){
                return [i, map.get(required)];
            }

       }
       return false
    }
}
