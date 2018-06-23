# add-two-for-target Function
## This function is submitted for [Zero-to-mastery Coding Challenge 6](https://github.com/zero-to-mastery/Coding_Challenge-6)

Given an array of numbers and a target number, this function tries to find a match of two numbers in the array that can be added to produce the target number. If it succeeds, it returns the match of two numbers in an array. Otherwise, it returns "There is no match of two numbers that are added to produce the target number." 

### Example
#### given [ [ 9, 4, 5, 4, 1 ], 10 ]
Result: [ 9, 1 ]

#### given [ [ 2, 3, 3, 5, 6 ], 4 ]
Result: There is no match of two numbers that are added to produce the target number.

### Test
The index.js file includes a test function that generates a random array and a random target number. You can set some constants to vary the numbers and range of the numbers.

* const NUMBERS_RANGE: set the range of numbers for a given array
* const NUMBER_OF_NUMBERS: set the number of numbers for a given array
* const TARGET_RANGE: set the range of a target number
