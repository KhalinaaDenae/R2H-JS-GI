//  Write a function that takes in an array of numbers and outputs the average of all the numbers. 


function findAverage(arr){
    // define variable to hold sum , count and average forumla 
    let sum = 0 
    let count = arr.length
    console.log(`the count is ${count}`)

    // loop through array and add each number to sum variable 
    for(let i = 0 ; i < arr.length; i++){
        console.log(arr[i])
        sum += arr[i]
    }
    
     let average = sum / count
     console.log(`the average is ${average}`)
     return average

}


console.log(findAverage([0,12,3,4,5,6,7,8]))