// ASSESSMENT 3: Coding Practical Questions with Jest


// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// Pseudocode
// input: variable which is a number (the length of the array)
// output: an array that is the length of the input containing the numbers of the Fibonacci sequence.
// const fibLength1 = 6
    // Expected output: [1, 1, 2, 3, 5, 8]
// const fibLength2 = 10
    // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
// Process: I will create a function called fibArray that will take in the variable and will output an array that is the length of the input containing the numbers of the Fibonacci sequence. I will create a for loop that create the array that then pushes the values into an empty array. I will set the first two values of the array at [1, 1] so that it starts with those first two values.

// a) Create a test with expect statements for each of the variables provided.

describe("fibFunction", () => {
  it("takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence", () => {
    const fibLength1 = 6
    // Expected output: [1, 1, 2, 3, 5, 8]
    
    const fibLength2 = 10
    // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
    expect(fibArray(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
    expect(fibArray(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })
})
// Fail: fibArray is not defined

 
// b) Create the function that makes the test pass.
const fibArray = (n) => {

  let array = [1, 1]

  for(let i=1; i < n - 1; i++) {
    array.push(array[i] + array [i - 1])
  }
  return array
}

// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// Pseudocode
// input: object (numbers)
// output: an array of the values sorted from least to greatest
// studyMinutesWeek1---> Expected output: [15, 15, 20, 30, 30, 60, 90]
// studyMinutesWeek2---> Expected output: [10, 15, 20, 45, 60, 65, 100]
// Process: I will create a function called lowHigh that will take in an object and will output an array of the values sorted from least to greatest. I will first use Object.values to put the values from the object into their own array. Then, I will use .sort to get the array in order from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

describe("lowHigh", () => {
  it("takes in an object and returns an array of the values sorted from least to greatest", () => {
    const studyMinutesWeek1 = {
      sunday: 90,
      monday: 30,
      tuesday: 20,
      wednesday: 15,
      thursday: 30,
      friday: 15,
      saturday: 60
    }
    // Expected output: [15, 15, 20, 30, 30, 60, 90]
    
    const studyMinutesWeek2 = {
      sunday: 100,
      monday: 10,
      tuesday: 45,
      wednesday: 60,
      thursday: 20,
      friday: 15,
      saturday: 65
    }
    // Expected output: [10, 15, 20, 45, 60, 65, 100]
    expect(lowHigh(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
    expect(lowHigh(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
  })
})
// Fail: lowHigh is not defined


// b) Create the function that makes the test pass.

const lowHigh = (object) => {
  const arrValues = Object.values(object)
  return arrValues.sort((a, b) => {
    return a - b
  }
  )
}

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// Pseudocode
// input: array of numbers
// output: An array of the accumulating sum. An empty array should return an empty array.
// const accountTransactions1 = [100, -17, -23, -9]
// Expected output: [100, 83, 60, 51]

// const accountTransactions2 = [250, -89, 100, -96]
// Expected output: [250, 161, 261, 165]

// const accountTransactions3 = []
// Expected output: []
// Process: I will create a function called sumArray that will take in an array and returns an array of the accumulating sum. I will create an array that starts with the number at index 0. That way each each value after that is the sum of the current number and the number at the index before. Then push the acumulated sum into the new array.

// a) Create a test with expect statements for each of the variables provided.

describe("sumArray", () => {
  it("takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.", () => {
const accountTransactions1 = [100, -17, -23, -9]
// Expected output: [100, 83, 60, 51]

const accountTransactions2 = [250, -89, 100, -96]
// Expected output: [250, 161, 261, 165]

const accountTransactions3 = []
// Expected output: []
    expect(sumArray(accountTransactions1)).toEqual([100, 83, 60, 51])
    expect(sumArray(accountTransactions2)).toEqual([250, 161, 261, 165])
    expect(sumArray(accountTransactions3)).toEqual([])
  })
})

// Good FAIL 
// ReferenceError: sumArray is not defined


// b) Create the function that makes the test pass.

const sumArray = (nums) => {
  let array = [nums[0]]
  for(let i = 1 ; i < nums.length ; i++) {
    nums[i] = nums[i] + nums[i-1]
    array.push(nums[i])
  }
  return array
}
