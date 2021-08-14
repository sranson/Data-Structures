// The Missing Computer Science and Coding Interview Bootcamp

// SECTION 4
// ====================================================================================================================================

//charCodeAt() RANGES!!!!!

// code > 47 && code < 58        // numeric (0-9)
// code > 64 && code < 91        // upper alpha (A-Z)
// code > 96 && code < 123       // lower alpha (a-z)

// To get ranges from console:  "A".charCodeAt()    OR  "Z".charCodeAt()

// ==========================================================================

// PROBLEM SOLVING STEPS:
// 1. Understand the problem
    // 1. State problem in my own words
    // 2. What inputs go into the problem?
    // 3. What are the outputs that should come from the solution?
    // 4. Do I have enough information to solve the problem?
    // 5. How should I label the important pieces of data in the problem?
    // ******* Ask the interviewer some questions to get clarity *******


// 2. Create Concrete Examples
    // Create simple example
    // Create a complex example
    // ******* Create examples to handle different scenarios 
        // - Upper/Lower case problems?
        // - Floats vs integers?
        // - Special characters?
        // - Empty inputs? 
        // - invalid inputs?


// 3. Break it down
    // Write comments that explicityly outline the steps to solve the problem (type up the skeleton of the function)
    // Involve the interviewer and see if they think I'm on the right track


// 4. Solve/ Simplify
    // Solve the portions of the problem that I can and return to the harder parts when possible based on the comments/ psudoCode


// 5. Refactor - optimize
    // How can I improve the time complexity or space complexity?


// ===================================================================================================================================================================================
//*
//*
//*
//*
//*
//*
//*
//*
//*                                                                     NEXT SECTION
//*
//*
//*
//*
//*
//*
//*
// ===================================================================================================================================================================================


// Section 5: Problem Solving Patterns
// ===================================================================================================================================================================================

// 1. Frequency Counters - O(n) time complexity

// Uses objects to collect values/ frequencies of values (Avoids the need for nested loops or O(N^2) operations with arrays/ strings)
// Useful when I have an algorithm with multiple pieces of data - multiple inputs that need to be compared to see if they have similar values without using nested loops (which are O(n^2))
// Example: anagrams, if a value is contained in the other, and if frequency matters in my solution)

// O(n) Time complexity
// Instead of creating a nested loop, we can loop over each array individually.
// Two or three separate loops - O(n) - is VASTLY better than two nested loops - O(n^2)

//**********************************************************************************************************************
// Example 1:
// Write a function called "same" which accepts two arrays. The function should return true if every value in the array 
// has it corresponding value squared in the second array. The frequency values must be the same.
//**********************************************************************************************************************

// function same (arr1, arr2) {
//     if(arr1.length !== arr2.length) {
//         return false;
//     }

//     let frequencyCounter1 = {};                                             // This object will count the frequency of individual values in the array
//     let frequencyCounter2 = {};                                             // This object will count the frequency of individual values in the array

//     for(let val of arr1) {
//         // key                   // value
//         frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;         // Add each element FROM the array TO the object. Add 1 to the frequency.
//     }

//     for(let val of arr2) {
//         // key                   // value
//         frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
//     }

//     for(let key in frequencyCounter1) {
//         if(!(key ** 2 in frequencyCounter2)) {                              // If [key]squared is NOT found in obj2, return false
//             return false;
//         }
//         if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {        // Do the frequency VALUES of obj1 and obj2 correspond? (If obj1 has two 2s, obj2 should have two 4s)
//             return false;
//         }
//     }
//     // console.log(frequencyCounter1);
//     // console.log(frequencyCounter2);
//     return true;
// }

// // We took two arrays, made each array into an object, and counted the frequency of each key occurrence, and then compared the two objects

// console.log(same([1,2,3,2], [9,1,4,4]));
// console.log(same([1,2,3,5], [1,4,9,11]));



// Frequency Counter CONTINUED
// Algorithm: "validAnagram"

//**********************************************************************************************************************
// Given two strings, write a funciton to determine if the second string is an anagram of the first. 
// An anagram is a word, phrase, or name formed by rearranging the letters of another, such as "cinema", formed from "iceman"
// Examples:
// ("", "")                     // true
// ("aaz", "zza")               // false
// ("anagram", "nagaram")       // true
// ("rat", "car")               // false
//**********************************************************************************************************************

// function validAnagram(str1, str2){
//     if(str1.length !== str2.length) return false;

//     let obj1 = {};
//     let obj2 = {};
  
//     for(let letter of str1) {
//         obj1[letter] = (obj1[letter] || 0) + 1;  
//       }
      
//     for(let letter of str2) {
//         obj2[letter] = (obj2[letter] || 0) + 1;  
//       }
  
//     for(let key in obj1) {
//         if(!(key in obj2)) {                            // if an obj1 key is NOT in obj2, return false
//             return false;
//         }
//         if(obj2[key] !== obj1[key]) {                   // THIS COMPARES THE COUNTERS - checks to make sure that the AMOUNTS of values in obj1 and obj2 are the same
//             return false;
//         }
//     }
//     // console.log(obj1);
//     // console.log(obj2);
//     return true;
// }

// console.log(validAnagram("anagram", "nagaram"));
// console.log(validAnagram("rat", "car"));
// console.log(validAnagram("", ""));
// console.log(validAnagram("aaz", "zza"));











// ===================================================================================================================================================================================

// 2. Multiple Pointers
// O(n) time complexity 
// O(1) Space Complexity


// Creates pointers that correspond to an index or position and move toward the beginning, end, or middle based on a certain condition
// Efficient for solving problems with minimal space complexity

// Example 1:
//**********************************************************************************************************************
// Write a function which accepts a SORTED array of integers. The funciton should find the first pai where the SUM is ZERO. 
// Return an array that includes both values that sum to zero or undefined if a pair does not exist.
//**********************************************************************************************************************


// function sumZero(arr) {
//     let left = 0;                                           // Points to the first element
//     let right = arr.length - 1;                             // Points to the last element

//     while(left < right) {                                   // Condition to make sure pointers don't overlap
//         let sum = arr[left] + arr[right];                   // Sum

//         if(sum === 0) {                                     // Condition met
//             return [arr[left], arr[right]];                 // Return an array of both values
//         } else if(sum > 0) {
//             right--;                                        // move the end pointer towards the middle
//         } else {
//             left++;                                         // move the beginning pointer towards the middle
//         }
//     }
// }

// console.log(sumZero([-4,-3,-2,-1,0,1,2,3,10]));                 // [-3, 3]
// console.log(sumZero([-4,-3,-2,-1,0,5,6,10]));                   // Undefined



// // Example 2: 
//**********************************************************************************************
// Implement a function which accepts a sorted array, and counts the unique values in the array. 
// There can be negative numbers in the array, but it will always be sorted.
// Examples:
// countUnique([1,1,1,1,1,2])                           //2
// countUnique([1,2,3,4,4,4,4,7,7,12,12,13])           // 7
// countUnique([])                                     // 0
// countUnique([-2,-1,-1,0,1])                         // 4
//**********************************************************************************************

// // We use one pointer at the beginning arr[0] and another pointer at arr[1] that moves toward the end

// // O(n) time complexity because we're only looping once
// function countUniqueValues(arr){
//     if(arr.length === 0) return 0;
//     let i = 0;
//     for(j = 1; j < arr.length; j++) {
//         if (arr[i] !== arr[j]) {
//             i++;
//             arr[i] = arr[j] 
//         } 
//     }
//     return i + 1;
// }

// console.log(countUniqueValues([1,1,1,2,3,4,5,6,7]));            // 7
// console.log(countUniqueValues([]));                             // 0






// ===================================================================================================================================================================================

// 3. Sliding Window
//  O(n) Time complexity 


// This is useful for keeping track of a subset of data in an array/string, etc.

//************************************************************************************************************
// Example 1: Write a function called maxSubarraySum which accepts an array of integers and a number called n. 
// The function should calculate the maximum sum of n consecutive elements in the array.
// Example: 
// maxSubarraySum([1,2,5,2,8,1,5], 2)      // 10
// maxSubarraySum([1,2,5,2,8,1,5], 4)      // 17
// maxSubarraySum([],4)                    // null
//************************************************************************************************************

// //  O(n) Time complexity because we loop over the arry one time
// function maxSubarraySum(arr, num) {
//     let maxSum = 0;
//     let tempSum = 0;
//     if(arr.length < num) return null;

//     for(let i = 0; i < num; i++) {
//         maxSum += arr[i];
//     }
//     tempSum = maxSum;
//     for(let i = num; i < arr.length; i++) {
//         tempSum = tempSum - arr[i - num] + arr[i];
//         maxSum = Math.max(maxSum, tempSum)
//     }
//     return maxSum;
// }

// console.log(maxSubarraySum([2,6,9,2,1,8,5,6,3], 3));




// ===================================================================================================================================================================================

// 3. Divide and Conquer
//  O(n) Time complexity 

// This pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data.
// Tremendously descresed time complexity

// Quick sort 
// Merge sort
// Binary search
// Binary Search Trees


//************************************************************************************************************************
// Given a sorted array of integers, write a function called "search" that accepts a value and returns the index where the 
// value passed to the function is located. If the value is not found, return -1
// Example
// search([1,2,3,4,5,6], 4)     // 3
//************************************************************************************************************************

// // Log(N) Time complexity
// function search(array, val) {
//     let min = 0;
//     let max = array.length - 1;

//     while(min <= max) {
//         let middle = Math.floor((min + max) / 2);
//         let currentElement = array[middle];

//         if(array[middle] < val) {
//             min = middle + 1;
//         }
//         else if(array[middle] > val) {
//             max = middle -1;
//         }
//         else {
//             return middle;
//         }
//     }
//     return -1;
// }


// console.log(search([1,2,3,4,5,6], 4));



// ===================================================================================================================================================================================
//*
//*
//*
//*
//*
//*
//*
//*
//*                                                                     NEXT SECTION
//*
//*
//*
//*
//*
//*
//*
// ===================================================================================================================================================================================


// Section 6: Optional Challenges
// ===================================================================================================================================================================================

// function sameFrequency(int1, int2){
//     let str1 = int1.toString();
//     let str2 = int2.toString();
//     if (str1.length !== str2.length) return false;
    
//     let counter1 = {};
//     let counter2 = {};
    
//     for(let i = 0; i < str1.length; i++) {
//         counter1[str1[i]] = (counter1[str1[i]] || 0) + 1;
//         // console.log(counter1);
//     }
    
//     for(let j = 0; j < str2.length; j++) {
//         counter2[str2[j]] = (counter2[str2[j]] || 0) + 1
//         // console.log(counter2);
//     }
  
//     for(let key in counter1) {
//         if(counter1[key] !== counter2[key]) return false;
//     }
//     return true;
//   }

//   console.log(sameFrequency(182, 281));


// ===================================================================================================================================================================================
//*
//*
//*
//*
//*
//*
//*
//*
//*                                                                     NEXT SECTION
//*
//*
//*
//*
//*
//*
//*
// ===================================================================================================================================================================================

// function sameFrequency(int1, int2){
//     let str1 = int1.toString();
//     let str2 = int2.toString();
    
//     if (str1.length !== str2.length) return false;
    
//     let obj1 = {};
//     console.log(obj1);
//     let obj2 = {};
//     console.log(obj2);
    
//    for(let i = 0; i < str1.length; i++) {
//        obj1[str1[i]] = (obj1[str1[i]] || 0) + 1;
//    }

//    for(let j = 0; j < str2.length; j++) {
//        obj2[str2[j]] = (obj2[str2[j]] || 0) + 1;
//    }
    
//     for(let key in obj1) {
//         if (obj1[key] !== obj2[key]) return false;
//     }
//     return true;
//   }

//   console.log(sameFrequency(182, 281));


// ===================================================================================================================================================================================
//*
//*
//*
//*
//*
//*
//*
//*
//*                                                                     NEXT SECTION
//*
//*
//*
//*
//*
//*
//*
// ===================================================================================================================================================================================


// ===================================================================================================================================================================================

// Section 7: Recursion

// Recursion:
// - A function that calls itself

// The Call Stack:
// - It's a "stack" data structure (LIFO) - Stack of dinner plates
// - Anytime a function is invoked, it is placed (pushed) on the top of the call stack
// - When JavaScript sees the return keyword or when the funciton ends, the compiler will remove (pop) from the top of the stack
// WHY DOES THE CALL STACK MATTER?      - BECAUSE THE CALL STACK OPERATES DIFFERENTLY (THAN WE'RE USE TO) WHEN WE USE RECURSIVE FUNCTIONS

// Recursion Continued:
// When we write recursive functions, we keep pushing new functions onto the call stack! - The same function OVER-AND-OVER
// When does it end??? => The base case!



// To write a recursive function, we need two things:
// 1. Base Case 
// 2. A function call to itself (with different input) until we meet the base case

// Example 1:
// Iteratively
// function countDown(num) {
//     for(let i = num; i > 0; i--) {
//         console.log(i);
//     }
//     console.log('All done!');
// }

// Recursively
// function countDown(num) {
//     if(num <= 0) {
//         return;                         // We have to have the "return" or the function WOULD NOT STOP;
//     }
//     console.log(num);
//     num--;
//     countDown(num);
// }

// countDown(5);



// // Example 2:
// function sumRange(num) {
//     if (num === 1) return 1;
//     return num + sumRange(num - 1);
// }

// // console.log(sumRange(3));

// // return 3 + sumRange(2)
//         // return 2 + sumRange(1)
//                  // return 1

// // return 3 + sumRange(2)
//         // return 2 + 1

// // return 3 + sumRange(2)
//         // return 3

// // return 3 + 3

// // return 6


// console.log(sumRange(4));

// // return 4 + sumRange(3)
//         // return 3 + sumRange(2)
//             // return 2 + sumRange(1)
//                 // return 1

// ==========================================================================================
// Recursion used with Factorial:
// 4!               =>  4! = 4 * 3 * 2 * 1              => 4! = 24  (Four factorial equals 24)


// // Factorial (Iteratively)
// // function factorial(num) {
// //     let total = 1;
// //     for(let i = num; i > 0; i--) {
// //         total *= i;
// //     }
// //     return total;
// // }


// // Factorial (Recursively)
// function factorial(num) {
//     if(num == 1) return 1;
//     return num * factorial(num - 1);
// }


// // // factorial(4)  = 4 * 4 - 1            factorial(num)  = num * num - 1 
// // // factorial(3)  = 3 * 3 - 1;           factorial(num)  = num * num - 1 
// // // factorial(2) = 2 *  2 - 1            factorial(num)  = num * num - 1 
// // // factorial(1) = 1;                    // Base Case

// console.log(factorial(5));          // 5! = 5 * 4 * 3 * 2 * 1 = 120


// ==========================================================================================
// Lecture 47:
// Common Recursion Pitfalls:

// 1. No base case          (Be sure to "RETURN" or it will go on forever!)
// 2. Wrong base case
// 3. Forgetting to return
// 4. Returning the wrong thing         (i.e. Forgetting to decrement... will run forever because the base case will never be met)

// THESE COMMON RECURSION PITFALLS WILL CAUSE A " STACK OVERFLOW" because processess/ functions will continue to be added to the stack
// and the base case will never be met.


// ==========================================================================================
// Lecture 48:
// Helper Method Recursion

// Useful when we need to store data in an array.
// Instead of creating an empty array outside of the function and have it floating around, we can use a helper method to populate an empty array recursively

// This is a pattern where an outer function contains and calls an inner-function(helper function) that does work recursively.

// Recursion with helper method

// function collectOddValues(arr) {
//     let result = [];
//     // Recursive Logic
//     // ===============================
//     function helper(helperInput) {
//         if(helperInput.length === 0) return;

//         if(helperInput[0] % 2 !== 0) {
//             result.push(helperInput[0]);
//         }

//         helper(helperInput.slice(1));       // RECURSIVE - helper method calls itself                           
//     }                                       //.slice(1) means call this function on arr[1] - through end of array [2,3,4,5,6,7,8,9]     // slice(1) means, call this function on everything EXCEPT arr[0]
//     // ===============================

//     helper(arr);                            // Calls the recursive function
//     return result;                          // Returns result
// }



// Fully recursive



// console.log(collectOddValues([1,2,3,4,5,6,7,8,9]));



// ===================================================================================================================================================================================
//*
//*
//*
//*
//*
//*
//*
//*
//*                                                                     NEXT SECTION
//*
//*
//*
//*
//*
//*
//*
// ===================================================================================================================================================================================

// Section 10


// Lecture 24 (Linear Search Exercise)
// Wroks if array is NOT sorted
// *********************************************************************************************************************************
// Implement a function that accepts and array and a value
// Loop through the array and check if the current array element is equal to the value
// If it is, return the index at which the element is found
// If the value is never found, return -1
// *********************************************************************************************************************************


// // O(n) time complexity(linear time complexity)
// function linearSearch(arr, val) {
//   for(let i = 0; i < arr.length; i++) {
//     if(arr[i] == val) return i;                             //   if(arr[i] == val) return arr.indexOf(arr[i]);
//   }
//   return -1;
// }

// console.log(linearSearch([1,2,3,4,5], 1));                    // 0
// console.log(linearSearch([10,15,20,25,30], 15));              // 1
// console.log(linearSearch([9,8,7,6,5,4,3,2,1,0], 4));          // 5


// ===================================================================================================================================================================================

// Lecture 25 (Linear Search Big-O) - With unsorted data
// Best Case: O(1)
// Average Case: O(n)
// Worse Case: O(n)



// ===================================================================================================================================================================================

// Lecture 30: Intro to Binary Search
// ONLY WORKS ON SORTED ARRAYS
// (Divide and Conquer Pattern)



// *********************************************************************************************************************************
// Pseudocode
    // This function accepts a sorted array of numbers, and a value
    // Create a left pointer at the start of the array, and a right pointer at the end of the array
    // While the left pointer comes before the right:
        // Create a pointer in the middle
        // If you find the searchValue, return the index
        // If the value is too small, move the left pointer up
        // If the value is too large, move the right pointer down
    // If the searchValue is never found, return -1
// *********************************************************************************************************************************

// function binarySearch(arr, elem) {
//     let start = 0;
//     let end = arr.length - 1;
//     let middle = Math.floor((start + end) / 2);
    
//     while(arr[middle] !== elem && start <= end) {
//         if(elem < arr[middle]) end = middle - 1;
//         else start = middle + 1;
//         middle = Math.floor((start + end) / 2);
//     }
//     return arr[middle] === elem ? middle : -1;                  // if(arr[middle] === elem) return middle;          // else return -1;
// }
                        
// console.log(binarySearch([2,5,6,9,13,15,28,30], 15));
                                            
// ===================================================================================================================================================================================

// Lecture 63 (Binary Search Big-O) - With unsorted data
// Best Case: O(1)                  // Great!
// Average Case: O(log n)           // REALLY GOOD
// Worse Case: O(log n)             // REALLY GOOD

// ===================================================================================================================================================================================





// ===================================================================================================================================================================================
// Lecture 64: 
// Naive String Search
// *************************************************************************************
// Challenge: Count the number of time a smaller string appears in a longer string

// Pseudocode
    // Loop over the longest string
    // Loop over the shorter string
    // If the characters don't match, break out of the inner loop
    // if the characters do match, keep going
    // If you complete the inner loop and find a match, increment the count of matches
    // Return the count
// **************************************************************************************

// function naiveSearch(long, short) {
//     let counter = 0;

//     for(let i = 0; i < long.length; i++) {
//         for(let j = 0; j < short.length; j++) {
//             if (short[j] !== long[i+j]) break;
//             if(j === short.length - 1) counter++;
//         }
//     }
//     return counter;
// }

// console.log(naiveSearch('lorie loled', 'lol'));         // 1


// ===================================================================================================================================================================================
//*
//*
//*
//*
//*
//*
//*
//*
//*                                                                     NEXT SECTION
//*                                         
//*                                                                       SORTING
//*
//*
//*
//*
//*
// ===================================================================================================================================================================================




// ===================================================================================================================================================================================
// Section 11

// Lecture 70: 
// Bubble Sort - sorting algorithm where the largest values bubble up to the top one at a time
// Big-O:   O(n^2)
// Big-O - Nearly sorted data):  O(n)
// ===================================================================================================================================================================================







// ===================================================================================================================================================================================
// Section 12

// Lecture 75:
// Selection Sort - similar to bubble sort but instead of fist placing large values into sorted position, 
// it creates a variable called "min" and places the smallest value into "min" and puts "min" at the beginning of data structure, one at a time
// Still moves from beginning to end

// Big-O: 
// Worse Case: O(n^2)
// Nearly-sorted: O(n)




// ===================================================================================================================================================================================
// Section 13


// Lecture 79:
// Insertion Sort - we gradually build up a sorted portion of the array by inserting one item, at a time, in the correct place.
// Works well if I need the data continuously sorted - if new elements are being added to the array


// function insertionSort(arr) {
//     for(let i = 1; i < arr.length; i++) {
//         let current = arr[i];
//         let j = i - 1;

//         while(j >= 0 && arr[j] > current) {
//             arr[j+1] = arr[j];
//             j--;
//         }
//         arr[j+1] = current;
//     }
//     return arr;
// }

                        
// console.log(insertionSort([2,15,9,76,4]));

// ===================================================================================================================================================================================
//*
//*
//*
//*
//*
//*
//*
//*
//*                                                                     NEXT SECTION
//*
//*
//*
//*
//*
//*
//*
// ===================================================================================================================================================================================


// // Section 19:
// // Singly Linked-Lists
// // Great for at Insertion and Deletion

// // Big-O Notation:
// // Insertion: O(1)
// // Removal (beginning): O(1)    - simple
// // Removal (end): O(n)          - because we have to find the second to last node
// // Searching: O(n)              - As the list grows, so does the number of operations(n)
// // Access: O(n)                 - As the list grows, so does the number of operations(n)


// // Notes:
// // Excellent alternative to arrays when INSERTION and DELETION at the BEGINNING are frequently required
// // Singly linkedlists DO NOT contain a built in index

// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class SinglyLinkedList {
//     constructor(head, tail) {
//         this.head = null;
//         this.tail = null;
//         this.length = 0;
//     }

//     // Add tail node
//     push(value) {                                       
//         let newNode = new Node(value);
//         if(!this.tail) {
//             this.head = newNode;
//             this.tail = newNode;
//         } else {
//             this.tail.next = newNode;
//             this.tail = newNode;
//         }
//         this.length++;
//         return this;                         // Return the list
//     }


//     // Remove tail node 
//     pop() {                                   // => We need to get to the second-to-last node
//         if(!this.head) return undefined;
//         let current = this.head;                        
//         let newTail = current;                // As tail moves right, newTail stays one node behind (WE NEED THIS!)
//         while(current.next) {                 // Get the second to last node
//             newTail = current;
//             current = current.next;           // WHEN THE LAST NODE IS REACHED, there will be no "current.next"
//         }
//         this.tail = newTail;
//         this.tail.next = null;
//         this.length--;
//         if(this.length === 0) {
//             this.head = null;
//             this.tail = null;
//         }
//         return current;
//     }

//     // Remove head node
//     shift() {
//         if(!this.head) return null;
//         let target = this.head;
//         if (target.next) this.head = target.next;
//         this.length--;
//         if(this.length === 0) {
//             this.head = null;
//             this.tail = null;
//         }
//         return target;
//     }                                   

//     // Add head node
//     unshift(value) {
//         let newNode = new Node(value);
//         if(!this.head) {                           // If list is empty
//             this.head = newNode;
//             this.tail = newNode;
//         }
//         else if(this.head) {                        // If list is NOT empty
//             let oldHead = this.head;
//             this.head = newNode;
//             this.head.next = oldHead;
//         }
//         this.length++;
//         return this;                                 // Return the list
//     }


//     get(searchIndex) {
//         if(searchIndex < 0 || searchIndex >= this.length) return null;

//         let counter = 0;
//         let current = this.head;

//         while(counter !== searchIndex) {
//             counter++;
//             current = current.next;
//         }
//         return current
//     }

//     set(index, val) {
//         if(this.length === 0) return null;

//         let targetNode = this.get(index)                // Use our get method to search for the node to be updated
//         if(targetNode) {
//             targetNode.value = val;
//             return true;
//         }
//         return false;
//     }

//     insertInto(index, value) {
//         let newNode = new Node(value);
        
//         if(index < 0 || index > this.length) return false;              // If index is negative number or if index is greater than the length of the list      
//         if(index === this.length) return this.push(value);              // If index is the end, run push()
//         if(index === 0) return this.unshift(value);                     // If index is 0, run unshift()

//         let prev = this.get(index - 1)                                  // CREATE prevous node
//         let target = prev.next                                            // temporary var to store node I'm about to move

//         prev.next = target.next                                             // CONNECT newNode to right AND left node
        

//         this.length++;
//         return true;
//     }

//     remove(index) {
//         if(index < 0 || index >= this.length) return null;
//         if(index === this.length -1) return this.pop(index);
//         if(index === 0) return this.shift();

//         let prev = this.get(index - 1);                         // left node
//         let target = this.get(index)                            // node to be removed
//         prev.next = target.next;                                // reconnect list

//         this.length--;
//         return target;
//     }
//     print() {
//         let arr = [];
//         let current = this.head;
//         while(current) {
//             arr.push(current.value);
//             current = current.next;
//         }
//         console.log(arr);
//     }


//     reverse() {
//         let node = this.head;
//         this.head = this.tail;
//         this.tail = node;
//         let next;
//         let prev = null;

//         for(let i = 0; i < this.length; i++) {
//             next = node.next;
//             node.next = prev;
//             prev = node;
//             node = next;
//         }
//         return this;
//     }

// }


// let list = new SinglyLinkedList();

// // ADD TAIL
// list.push("Amanda");
// list.push("Sade");
// list.push("Salome");


// // REMOVE TAIL
// // list.pop();
// // list.pop();


// //ADD HEAD
// list.unshift("Wayne");
// // list.unshift("Bear");
// // list.unshift("Olaf");

// // REMOVE HEAD
// // list.shift();

// // GET (aka Search...for a value based on a number/index)
// // console.log(list.get(0));

// // SET
// // list.set(0, "Wayne Ranson");
// // list.set(3, "Salome Ranson");

// // INSERT (into middle)
// // list.insertInto(4, "Bear");

// // REMOVE (from middle)
// // list.remove(3)

// // REVERSE A LIST
// // list.print();
// // list.reverse()
// // list.print();

// console.log(list);



// ===================================================================================================================================================================================

// Section 20:
// Doubly Linked-Lists

// Big-O:   
// Insertion: O(1)
// Removal: O(1) - NOT THE CASE FOR A SINGLY LINKED LIST
// Searching: O(n/2) which is still O(n) even though its optimized
// Access: O(n)

// The second pointer in a doubly linked list takes up more memory than a singly linked list




// class Node {
//     constructor(value) {
//         this.value = value;
//         this.prev = null;
//         this.next = null;
//     }
// }


// class DoublyList {
//     constructor() {
//         this.head = null;
//         this.tail = null;
//         this.length = 0;
//     }

//     // ADD TAIL
//     push(value) {
//         let newNode = new Node(value);
//         if(this.length === 0) {
//             this.head = newNode;
//             this.tail = newNode;
//         } else {
//             this.tail.next = newNode;
//             newNode.prev = this.tail;
//             this.tail = newNode;
//         }
//         this.length++;
//         return this;
//     }

//     // REMOVE TAIL
//     pop() {
//         if(this.length === 0) return;

//         let target = this.tail;
//         if(this.length === 1)  {
//             this.head = null;
//             this.tail = null
//         } 
//         else {
//             this.tail = target.prev;
//             this.tail.next = null;
//         } 
//         this.length--;
//         return target;
//     }

//     // REMOVE HEAD
//     shift() {
//         if(this.length === 0) return;
//         let target = this.head;
//         if(target.next) this.head = target.next;
//         else this.tail = null;
//         this.head.prev = null;
//         this.length--;
//         return target;
//     }

//     //ADD HEAD
//     unshift(value) {
//         let newNode = new Node(value);
        
//         if(!this.head) this.tail = newNode;
//         else if(this.head) this.head.prev = newNode;
//         this.head = newNode;

//         this.length++;
//         return this;
//     }

//     get(index) {    
//         if(index < 0 || index >= this.length) return null;

//         let half = this.length / 2;
//         let counter = 0;
//         let currentNode;
        
//         if(index < half) {                                              // start searching from beginning
//             counter = 0;
//             currentNode = this.head;
//             while(counter !== index) {
//                     currentNode = currentNode.next;
//                     counter++;
//             }
//         } else {                                                        //start searching from end
//             counter = this.length-1;
//             currentNode = this.tail;
//             while(counter !== index) {
//                     currentNode = currentNode.prev;
//                     counter--;
//             }
//         }
//         return currentNode;
//     }

//     set(index, value) {
//         let targetNode = this.get(index);
//         if(targetNode !== null) {
//             targetNode.value = value;
//             return true;
//         }
//         return false;
//     }

//     insert(index, value) {
//         if(index < 0 || index > this.length) return null;
//         if(index === 0) return this.unshift(value);
//         if(index === this.length) return this.push(value);

//         let newNode = new Node(value)
//         let beforeNode = this.get(index - 1);
//         let afterNode = beforeNode.next;

//         beforeNode.next = newNode;
//         newNode.prev = beforeNode;
//         newNode.next = afterNode;
//         afterNode.prev = newNode;

//         this.length++;
//         return true;
//     }

//     remove(index) {
//         if(index < 0 || index >= this.length) return null;
//         if(index === 0) return this.shift();
//         if(index === this.length -1) return this.pop(); 

//         let targetNode = this.get(index);
//         let beforeNode = targetNode.prev;
//         let afterNode = targetNode.next;

//         beforeNode.next = afterNode;
//         afterNode.prev = beforeNode;

//         this.length--;
//         return targetNode;
//     }


// }


// let myList = new DoublyList();

// // ADD TAIL
// myList.push("Wayne")
// myList.push("Amanda");
// myList.push("Sade");
// myList.push("Salome");
// myList.push("Jaleah");
// myList.push("Jalen");
// myList.push("Bear");
// myList.push("Olaf")

// // REMOVE TAIL
// // myList.pop();

// // REMOVE HEAD
// // myList.shift();

// //ADD HEAD
// // myList.unshift("FIRST");

// //GET NODE by index
// // console.log(myList.get(6));

// // SET node by index
// // myList.set(1, "Amanda Dyes");

// // INSERT node in middle
// // myList.insert(8, "test")

// //REMOVE
// // myList.remove(1);


// console.log(myList);


// ===================================================================================================================================================================================
//*
//*
//*
//*
//*
//*
//*
//*
//*                                                                     NEXT SECTION
//*
//*
//*
//*
//*
//*
//*
// ===================================================================================================================================================================================

// Section 21:
// Stacks - LIFO -  - LIFO -    - LIFO -    - LIFO -    - LIFO -    - LIFO -    - LIFO -    - LIFO -

// ------------------------------- STACKS (with Arrays) -------------------------------
// Implement a Stack with an array using JavaScript built-in methods:   push()/pop() OR shift()/unshift()
// REMEMBER: Adding or removing from the beginning of an array is NOT efficient b/c the entire array has to be re-indexed 
// SO! If I care about efficiency, I probably would NOT want to use shift() and unshift() with stacks/ arrays



// ------------------------------- STACKS (with Linked Lists and Classes) -------------------------------

// Big-O:
// Insertion: O(1) - with custom class/methods. NOT with arrays.
// Removing: O(1) -  with custom class/methods. NOT with arrays.
//----------
// Searching: O(n)  // Not optimal. Use different structure
// Access: O(n)     // Not optimal. Use different structure


// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }


// class Stack {
//     constructor() {
//         this.first = null;
//         this.last = null;
//         this.size = 0;
//     }


//     // ADD TO END
//     push(value) {
//         let newNode = new Node(value);
//         if(!this.first) {
//             this.first = newNode;
//             this.last = newNode;
//         } else {
//             let temp = this.first;
//             this.first = newNode;
//             this.first.next = temp;
//         }
//         return this.size++;
//     }

//     // REMOVE FROM END
//     pop() {
//         if(this.size === 0) return null;

//         let temp = this.first;

//         if(this.first === this.last) {
//             this.last = null;
//         }

//         this.first = this.first.next;
//         this.size--;
//         return temp.value;
//     }
// }

// let myStack = new Stack();

// myStack.push("Salome")
// myStack.push("Sade")
// myStack.push("Amanda")
// myStack.push("Wayne")           

// myStack.pop();

// console.log(myStack);




// ------------------------------- QUEUES ----------------------------------------------------------------------------------------------------
// Queue - FIFO -   - FIFO -    - FIFO -    - FIFO -    - FIFO -    - FIFO -    - FIFO -    - FIFO -

// Big-O:
// Insertion: O(1) - with custom class/methods. NOT with arrays.
// Removal: O(1)   - with custom class/methods. NOT with arrays.
//----------
// Searching: O(n)  // Not optimal. Use different structure
// Access: O(n)     // Not optimal. Use different structure

// ----------------QUEUES (with Arrays) -------------------------------
// let q = [];
// q.unshift("FIRST")
// q.unshift("SECOND")
// q.unshift("THIRD")
// q.unshift("FOURTH")

// console.log(q);

// q.pop();

// console.log(q);

// ------------------------------- QUEUES (with Classes) -------------------------------
// Add to the end (push) and remove from the beginning (shift)  -------- Like a concession stand line

// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class Queue {
//     constructor() {
//         this.first = null;
//         this.last = null;
//         this.size = 0;
//     }

//     // add to the end
//     inQueue(value) {
//         let newNode = new Node(value);
//         if(this.size === 0) {
//             this.first = newNode;
//             this.last = newNode;
//         } else {
//             let temp = this.last;
//             temp.next = newNode;
//             this.last = newNode;
//         }
//         return this.size++;
//     }

//     // remove from the beginning
//     outQueue() {
//         if(this.size === 0) return null;

//         let temp = this.first;
//         if(this.first === this.last) {
//             this.last = null;
//         }
//         this.first = this.first.next;
//         this.size--;
//         return temp.value;
//     }
// }


// let myQueue = new Queue();

// // add to end
// myQueue.inQueue("FIRST")
// myQueue.inQueue("SECOND")
// myQueue.inQueue("THIRD")

// // remove from beginning
// myQueue.outQueue()


// console.log(myQueue);

// ===================================================================================================================================================================================
//*
//*
//*
//*
//*
//*
//*
//*
//*                                                                     NEXT SECTION
//*
//*
//*
//*
//*
//*
//*
// ===================================================================================================================================================================================

// Section 22:
// Binary Search Trees

//Big-O Notation: 
// Insertion: O(log n)  - logarithmic (even better than linear) - IF TREE IS BALANCED!!!!!!!!!!
// Searching: O(log n)  - logarithmic (even better than linear) - IF TREE IS BALANCED!!!!!!!!!!

// Since BST are sorted, if the input increases/doubles, the steps will NOT double
// Example:
    // BST size increases by 2x: 1 extra step
    // BST size increases by 4x: 2 extra steps
    // BST size increases by 8x: 3 extra steps

// class Node {
//     constructor(value) {
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }
// }

// class BST {
//     constructor() {
//         this.root = null;
//     }

//     insert(value) {
//         let newNode = new Node(value);

//         if (this.root === null) {                                   // If tree is empty, create a root node
//             this.root = newNode
//             return this;
//         } else {                                                    // If there IS a root node
//             let current = this.root;

//             while(true) {
//                 if(value === current.value) return undefined;       // prevents infinite loop

//                 if(value < current.value) {                         // Add to left side if less than root
//                     if (current.left === null) {                    // If there is NOT a node already there
//                         current.left = newNode;                     // Set node to left branch
//                         return;
//                     } else {                                     
//                         current = current.left;                     // Traverse until we have an empty left spot 
//                     }
//                 } else if(value > current.value) {                  // Add to left side if less than root
//                     if(current.right === null) {
//                         current.right = newNode;
//                         return;
//                     } else {
//                         current = current.right;
//                     }
//                 }
//             }
//         }
//     }

//     // Search for a node and return node if found
//     search(value) {
//         if(!this.root) return false;
        
//         let current = this.root;
        
//         if(value === current.value) return current;
        
//         else {
//             if(value < current.value) {
//                 while(current) {
//                     if(value === current.value) return current;
//                     current = current.left;
//                 }
//                 return null;
//             } else if(value > current.value) {
//                 while(current) {
//                     if(value === current.value) return current;
//                     current = current.right;
//                 }
//                 return null;
//             }
//         }
//     }

// }


// let myTree = new BST();

// // Insert
// myTree.insert(10);
// myTree.insert(8);
// myTree.insert(12);


// // Search
// // console.log(myTree.search(8));

// console.log(myTree);

// ===================================================================================================================================================================================
//*
//*
//*
//*
//*
//*
//*
//*
//*                                                                     NEXT SECTION
//*
//*
//*
//*
//*
//*
//*
// ===================================================================================================================================================================================

// Section 23:
// Tree Traversal
// For ANY TREE


//                                                                      Breadth First Search
//                                                                      ====================

// Visit every node on the same level (sibling nodes) - Horizontally




//                                                                      Depth First Search
//                                                                In-order, Pre-order, Post-order
//                                                                ===============================

// DFS - Pre-order: Visit root, then left node, then right node (at all levels)
// DFS - Post-order: Visit left-most child, then right child, then root node (at all levels)
// DFS - In-order: Visit left-most child, then root node, then right child (at all levels)


// class Node {
//     constructor(value) {
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }
// }

// class BST {
//     constructor() {
//         this.root = null;
//     }

//     insert(value) {
//         let newNode = new Node(value);

//         if (this.root === null) {                                  
//             this.root = newNode
//             return this;
//         } else {                                                 
//             let current = this.root;

//             while(true) {
//                 if(value === current.value) return undefined;       

//                 if(value < current.value) {    
//                     if (current.left === null) {   
//                         current.left = newNode;  
//                         return;
//                     } else {                                     
//                         current = current.left;   
//                     }
//                 } else if(value > current.value) {   
//                     if(current.right === null) {
//                         current.right = newNode;
//                         return;
//                     } else {
//                         current = current.right;
//                     }
//                 }
//             }
//         }
//     }

//     // Search for a node and return node if found
//     search(value) {
//         if(!this.root) return false;
        
//         let current = this.root;
        
//         if(value === current.value) return current;
        
//         else {
//             if(value < current.value) {
//                 while(current) {
//                     if(value === current.value) return current;
//                     current = current.left;
//                 }
//                 return null;
//             } else if(value > current.value) {
//                 while(current) {
//                     if(value === current.value) return current;
//                     current = current.right;
//                 }
//                 return null;
//             }
//         }
//     }

//     bfs() {
//         let node = this.root;
//         let data = [];
//         let queue = [];

//         queue.push(node);                               // Push to the end of queue (FI)
        
//         while(queue.length) {                                                                           //while there is something in the queue
//             node = queue.shift();                       // take from the beginning of the queue (FO)
//             data.push(node)                             // add node to data (BECAUSE data will be returned)       
//             if(node.left) queue.push(node.left);
//             if(node.right) queue.push(node.right);
//         }  
//         return data;
//     }

//     // Can be done iteratively but shorter recursively
//     DFSpreorder() {
//         let data = [];
//         let current = this.root;

//         function traverse(node) {
//             data.push(node.value);                                        // Visit root node
//             if(node.left) traverse(node.left);                           // Visit left node
//             if(node.right) traverse(node.right);                         // Visit right node
//         }
//         traverse(current)
//         return data;
//     }

//     DFSpostorder() {                                                // Basically, the opposite of preorder
//         let data = [];
//         let current = this.root;

//         function traverse(node) {                           
//             if(node.left) traverse(node.left);                      // Visit left node    
//             if(node.right) traverse(node.right);                    // Visit right node
//             data.push(node.value);                                  // Visit root node
//         }
//         traverse(current);
//         return data;
//     }

//     DFSinorder() {
//         let data = [];
//         let current = this.root;

//         function traverse(node) {
//             if(node.left) traverse(node.left);                          // Visit left node
//             data.push(node.value);                                      // Visit root node
//             if(node.right) traverse(node.right);                        // Visit right node
//         }
//         traverse(current);
//         return data;
//     }

// }

// let tree = new BST();

// tree.insert(10);
// tree.insert(6);
// tree.insert(15);
// tree.insert(3);
// tree.insert(8);
// tree.insert(20);

// Example Tree:
//                      10
//                   6      15
//                 3   8       20


// console.log(tree.bfs());                              // 10, 6, 15, 3, 8, 20      

// console.log(tree.DFSpreorder());                      // 10, 6, 3, 8, 15, 20

// console.log(tree.DFSpostorder());                     // 3, 8, 6, 20, 15, 10

// console.log(tree.DFSinorder());                       // 3, 6, 8, 10, 15, 20

// console.log(tree);






//                                                                           BFS vs DFS
//                                                                      ====================


// BEST Traversal method is determined by structure of the tree

// TIME COMPLEXITY of BFS and DFS IS THE SAME - we're visiting every node one time
// ===============


// SPACE COMPLEXITY (BFS vs DFS):
// ================

// (1) WIDE TREE/ BALANCED TREE:
// BFS = MORE SPACE (because the queue holds more nodes at a given time. (It will eventually be emptied out))
// DFS = LESS NODES are stored in a queue at a time (i.e. Just a branch)

// (2) LOP-SIDED TREE:
        // E.g. => One-sided tree where all nodes are greater than root node, so tree is right-side heavy or vice versa):
// BFS = LESS SPACE (Queue may only hold one node at a time)
// DFS = MORE SPACE (Queue will hold all nodes in memory before popping them off the queue)


// USE CASES (for DFS variances)
//==========

// In-order 
// Useful if I want Data to be ORDERED/ SORTED
// I don't know what the root node is

// Pre-Order / Post-Order
// Useful if I want to clone or store a tree - flatten it out, store it, then re-create it somewhere else
// The first node is the root


// ===================================================================================================================================================================================
//*
//*
//*
//*
//*
//*
//*
//*
//*                                                                     NEXT SECTION
//*
//*
//*
//*
//*
//*
//*
// ===================================================================================================================================================================================



// ===================================================================================================================================================================================

// Section 24:
// Binary Heaps

// A binary heap is another category of trees
// There are many types of heaps


// What is a Binary Heap?
// - In a binary heap, all the children of each node are as full as possible
// - LEFT CHILDREN ARE FILLED FIRST

// Max Heap:
// -Parent nodes are ALWAYS GREATER than the children nodes


// Min Heap:
// - Children nodes are ALWAYS GREATER than the parent node

// FORMULA
// Formula to find a child node based off of index of parent node:
// Find Left node: 2n + 1;          or (2 * nodeIndex) + 1;
// Find Right node: 2n + 2;         or (2 * nodeIndex) + 2;

// To find the parent of a child node, reverse the formula:
// (nodeIndex - 1) / 2  => Gives the index of the parent node



// class MaxBinaryHeap {
//     constructor() {
//         this.values = [41,39,33,18,27,12];
//     }

//     insert(element) {
//         this.values.push(element)
//         this.bubbleUp();
//     }

//     bubbleUp() {
//         let index = this.values.length - 1;
//         let element = this.values[index]
//         while(index > 0) {
//             let parentIndex = Math.floor((index -1) / 2);           // Get index of parent node
//             let parent = this.values[parentIndex];                  // Get the value of parent node
//             if(element <= parent) break;                            // If element is less than the parent node, dont move it anywhere
//                 this.values[parentIndex] = element;                 // Swap
//                 this.values[index] = parent;                        // Swap
//                 index = parentIndex;
//         }
//     }

//     // Remove the root from Max Heap
//     extractMax() {
//         const max = this.values[0];                                 // First element in array
//         const end = this.values.pop();                              // Remove last element in array
//         if(this.values.length > 0)  {
//             this.values[0] = end;                                       // Put the element that was just removed, at the start of array
//             this.sinkDown();                                            // Invoke sinkDown
//         }
//         return max;                                                 // Return the element that was removed for good
//     }


    
//     sinkDown() {
//         let index = 0;                                              
//         const length = this.values.length;
//         const element = this.values[0];                               // The element that was JUST placed in values[0] from extractMax()
//         while(true) {
//            let leftChildIndex = 2 * index + 1;
//            let rightChildindex = 2 * index + 2;
//            let leftChild, rightChild;
//            let swap = null;
           
//            if(leftChildIndex < length) {
//                leftChild = this.values[leftChildIndex];
//                if(leftChild > element) {
//                    swap = leftChildIndex;
//                }
//            }
//            if(rightChildindex < length) {
//                rightChild = this.values[rightChildindex];
//                if(
//                    (swap === null && rightChild > element) ||
//                    (swap !== null && rightChild > leftChild)
//                ) {
//                    swap = rightChildindex;
//                }
//            }
//            if(swap === null) break;
//            this.values[index] = this.values[swap];
//            this.values[swap] = element;
//            index = swap;
//         }
//     }
// }

// let heap = new MaxBinaryHeap();

// console.log(heap);


// // INSERT
// heap.insert(55);
// // heap.insert(1);
// // heap.insert(45);
// // heap.insert(100);


// // Before extractMax()              [55, 39, 41, 18, 27, 12, 33]
// heap.extractMax();                              
// // After extractMax()               [41, 39, 33, 18, 27, 12]

// ===================================================================================================================================================================================




// Priority Queue:
// What is a priroty queue?

// An abstract concept/ data structure where each element has a priority.
// Elements with higher priorities are served before elements with lower priorities
// Often implemented with Binary Heaps



//------------------------------------------- Min Binary Heap Priority Queue Implementation --------------------------
// Lower number means higher priority


// class PriorityQueue {
//     constructor() {
//         this.values = [];
//     }

//     enqueue(value, priority) {
//         let newNode = new Node(value, priority)
//         this.values.push(newNode)
//         this.bubbleUp();
//     }

//     bubbleUp() {
//         let index = this.values.length - 1;
//         let element = this.values[index]
//         while(index > 0) {
//             let parentIndex = Math.floor((index -1) / 2);           
//             let parent = this.values[parentIndex];        
//             if(element.priority >= parent.priority) break;          
//                 this.values[parentIndex] = element;     
//                 this.values[index] = parent;      
//                 index = parentIndex;
//         }
//     }

//     // Remove the root from Max Heap
//     dequeue() {
//         const min = this.values[0];       
//         const end = this.values.pop();           
//         if(this.values.length > 0)  {
//             this.values[0] = end;           
//             this.sinkDown();          
//         }
//         return min;         
//     }

//     sinkDown() {
//         let index = 0;                                              
//         const length = this.values.length;
//         const element = this.values[0];                         
//         while(true) {
//            let leftChildIndex = 2 * index + 1;
//            let rightChildindex = 2 * index + 2;
//            let leftChild, rightChild;
//            let swap = null;
           
//            if(leftChildIndex < length) {
//                leftChild = this.values[leftChildIndex];
//                if(leftChild.priority < element.priority) {
//                    swap = leftChildIndex;
//                }
//            }
//            if(rightChildindex < length) {
//                rightChild = this.values[rightChildindex];
//                if(
//                    (swap === null && rightChild.priority < element.priority) ||
//                    (swap !== null && rightChild.priority < leftChild.priority)
//                ) {
//                    swap = rightChildindex;
//                }
//            }
//            if(swap === null) break;
//            this.values[index] = this.values[swap];
//            this.values[swap] = element;
//            index = swap;
//         }
//     }
// }

// class Node {
//     constructor(value, priority) {
//         this.value = value;
//         this.priority = priority;
//     }
// }


// let ER = new PriorityQueue();
// console.log(ER);

// // Enqueue (Add to queue)
// ER.enqueue("common cold", 5);
// ER.enqueue("gunshot wound", 1);
// ER.enqueue("high fever", 4);
// ER.enqueue("broken arm", 2);
// ER.enqueue("glass in foot", 3);

// // Dequeue
// // ER.dequeue();



