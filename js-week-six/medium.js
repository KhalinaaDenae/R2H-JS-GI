// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand. (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

//You may assume no duplicate exists in the array.



//You are given a target value to search. If found in the array, return its index, otherwise return -1.
// create function to accept array and value to search 
function findVal(arr, value){
    // indexOf returns index if elements is found and -1 otherwise 
    let isValFound =  arr.indexOf(value) 
   
    console.log(isValFound)
    return isValFound
   
}
findVal([1,2,3,4,5], 9)
findVal([1,2,3,4,5], 3)
