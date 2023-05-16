// You are given coins of different denominations and a total amount of money amount.
// Write a function to compute the fewest number of coins that you need to make up that amount.
// If that amount of money cannot be made up by any combination of the coins, return -1.

function coinChange(coins, amount) {
    // Sort the coins array in descending order
    coins.sort((a, b) => b - a);
    
    let numCoins = 0;
    
    // Loop through all coin denominations
    for (let coin of coins) {
      // While the current coin denomination can be used to make up the remaining amount, use it and update the remaining amount
      while (amount >= coin) {
        amount -= coin;
        numCoins++;
      }
    }
    
    // If the remaining amount is not 0, it means it's not possible to make up the amount using the given coins
    return amount === 0 ? numCoins : -1;
  }
  
  console.log(coinChange([1, 2, 5], 11)); 
