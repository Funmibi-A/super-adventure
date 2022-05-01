// Q1. Create a function with a function name printSum() and print the sum of an array

numArray = [3, 5, 2, 5, 6] // => sums up to 21
numArray2 = [4, 9, 7, 2] // => sums up to 22

function printSum() {
  let total = 0
  for (let i=0; i < numArray2.length; i++) {
    total += numArray2[i]
  }
  return total
}
printSum();

/*
Q2.
Alice and Bob each created one problem for hackerrank, 
a viewer rates the challenges, awarding points from a scale of 1-100 
for three categories: 
  problem clarity, 
  originality  
  difficulty.
the rating for alice’s challenge is the triplet a=(a[0], a[1], a[2]) 
and the rating for Bob's challenge is the triplet b=(b[0], b[1], b[2]).

The task is to find their different comparison points by 
comparing a[0] to b[0], a[1] to b[1], a[2] to b[2]

If a[i]>b[i] then alice is awarded 1point

If a[i]<b[i] then bob is awarded 1 point

If a[i]===b[i] then none of them gets a point

The comparison points should be the total points a person earned.
*/ 

let alice = [1, 2, 3]
let bob = [4, 5, 7]

function comparePoints() {
  let totalPoints = []
  let aPoints = 0
  let bPoints = 0

  // index 0
  if (alice[0] > bob[0]) {
    aPoints++
  } else if (alice[0] < bob[0]) {
    bPoints++
  } else if (alice[0] === bob[0]) {
    console.log(aPoints)
    console.log(bPoints)
  }

  // index 1
  if (alice[1] > bob[1]) {
    aPoints++
  } else if (alice[1] < bob[1]) {
    bPoints++
  } else if (alice[1] === bob[1]) {
    console.log(aPoints)
    console.log(bPoints)
  }

  // index 2
  if (alice[2] > bob[2]) {
    aPoints++
  } else if (alice[2] < bob[2]) {
    bPoints++
  } else if (alice[2] === bob[2]) {
    console.log(aPoints)
    console.log(bPoints)
  }

  // if (alice[0] === bob[0]) {
  //   console.log(aPoints)
  //   console.log(bPoints)
  // } else if (alice[1] === bob[1]) {
  //   console.log(aPoints)
  //   console.log(bPoints)
  // } elif (alice[1] === bob[1]) {
  //   console.log(aPoints)
  //   console.log(bPoints)
  // }
  

  // adding the total points into the a && bPoints variable
  totalPoints.push(aPoints)
  totalPoints.push(bPoints)
  
  // returning totalPoints
  return totalPoints
}
comparePoints();

/*
Q3. Given an array of integers, calculate the ratio of its elements 
that are positive, negative and zero. Print the decimal value of each
fraction on a new line with places after the decimal.
*/
let numArray3 = [1, 2, 3, 4, -2, -3, 0]
let pos = 0
let neg = 0
let zero = 0
total = 0
for (let i = 0; i < numArray3.length; i++) {
  total += 1
  if (numArray3[i] > 0) {
    pos += 1
    // console.log(newPos)
  } else if (numArray3[i] < 0) {
    neg += 1
    // console.log(neg)
  } else if (numArray3[i] === 0) {
    zero += 1
    // console.log(zero)
  }
}
console.log(pos/total)
console.log(neg/total)
console.log(zero/total)


/*
Q4. Create a function with a function name firstFunction( ) and return
the sum of two integers(numbers)
*/
function firstFunction(int1, int2) {
  total = int1 + int2
  return total
}

firstFunction(29, 50);