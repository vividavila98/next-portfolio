---
title: "Big-O Notation"
date: "March 19, 2022"
tag: "Fundamentals"
---

# Introduction

- Time complexity analyses the runtime of an algorithm as the input increases.
- Space complexity is the memory used to complete the algorithm, excluding inputs.
- Big-O notation measures the worst-case complexity of an algorithm.
- `n` represents the number of inputs.
- So the question that Big-O answers is “What will happen as `n` approaches infinity?”

<!-- ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0f502eeb-6928-46c0-b12d-e6b6d9e36166/Untitled.png) -->

## O(1) - constant time

- O(1) does not change with respect to input space (`n`).
- It doesn’t matter how large the input is, it Sstill remains at “constant time”.
- An example would be accessing an element in an array by its index.

  ```jsx
  // it doesn't matter what the length of arr is, it'll still take
  // the same time to complete (aka constant time)

  const getElem = (arr, i) => {
    return arr[i];
  };
  ```

## O(n) - linear time

- O(n) describes algorithms that execute a maximum of `n` amount of times.
- An example would be printing elements of an array from 0 to `n-1`
- A single for or while loop

```jsx
// if arr's length is 10, it's executing 10 times
// if arr's length is 1000, it's executiing 1000 times
// it's based on arr's length aka n

const printElems = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    console.log(i);
  }
};
```

## O(n^2) - quadratic time

- Two nested loops of the same input

```jsx
const exampleQuadratic = (n) => {
  for (let i = 0; i < n; i++) {
    console.log(i);
    for (let j = i; j < n; j++) {
      console.log(j);
    }
  }
};

const exampleQuadratic2 = (n) => {
  for (let i = 0; i < n; i++) {
    console.log(i);
    for (let j = 0; j < n; j++) {
      console.log(j);
    }
  }
};
```

## O(n^3) - cubic time

- 3 nested loops of the same input

```jsx
const exampleCubic = (n) => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        console.log([i, j, k]);
      }
    }
  }
};

const exampleCubic2 = (n) => {
  for (let i = 0; i < n; i++) {
    console.log(i);
    for (let j = i; j < n; j++) {
      console.log(j);
      for (let k = j; k < n; k++) {
        console.log(k);
      }
    }
  }
};
```

## O(log(n)) - logarithmic time

- When a divide and conquer approach is used

```jsx
const exampleLog = (n) => {
  for (let i = 2; i < n; i = i * 2) {
    console.log(i);
  }
};

exampleLog(100);
2;
4;
8;
16;
32;
64;

exampleLog(200);
2;
4;
8;
16;
32;
64;
128;

// only one more calculation was made when n was doubled from 100 to 200
```

- Assume that we’re dealing with log base of 2 aka the binary logarithm.
- Logarithms occur in CS by repeatedly dividing some data input (array) in half so the number of times you can divide a data input of length `n` in half before you get to a single element is log2(n).
- Exponential growth happens from dividing and conquering.
- In Big-O notation (upper bound growth), all logarithms are asymptomatically equivalent
- The log of 8 would be: **_log_(_8_) *= 3, 2³ = 8***
- The log of 16 would be: **_log_(_16_) *= 4, 2⁴ = 16***

<!-- ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/26d36bdf-3579-4f12-bc4d-e085bfa599ff/Untitled.png) -->

- When **N** doubles, **_log(n)_** only increases by 1
- So when an algorithm has a time complexity of log(n), that’s good bc that means as the input `n` increases/doubles, the number of steps taken to complete the algorithm increases only by 1.
- In general, when we have an algorithm that divides the data in half on each call, we are most likely dealing with logarithmic runtime: O(log n).
- Logarithmic complexity `log(n)` is extremely better than linear complexity `O(n)`

### Example - Binary Search

- If you have a sorted array from 1 - 1,000 and a number you’re trying to guess, you can use binary search instead of linear search.
- In linear search, you start from the beginning, and go number by number to see if you found the right number
  <!-- ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/65d0a506-2357-49f8-aadd-8ce114cbafb4/Untitled.png) -->
- So if the array was until 2,000, at WORST it would take 2,000 tries
- If you do a binary search, you guess the middle value. If it’s too high, you eliminate the last half of the array and now go to the middle of the first half of the array.
- At worst this would take 11 tries.

## Rules of Big-O Notation

- Co-efficient rule: eliminate coefficients that are not related to the input size `n`
  - As `n` approaches infinity, the other coefficient becomes unimportant
- Sum rule: time complexities can be added together
- Product rule: Big-O’s can be multiplied
- Polynomial rule: If f(n) is a polynomial of degree k, then f(n) is O(n^k)

## Coefficient Rule

- This means that 5f(n) and f(n) have the same Big-O notation

  ```jsx
  // Example of f(n) with time complexity O(n)
  const printN = (n) => {
    let count = 0;
    for (let i = 0; i < n; i++) {
      count = +1;
    }
    return count;
  };

  // Example of 5f(n) with time complexity O(n)
  const print5N = (n) => {
    let count = 0;
    for (let i = 0; i < 5 * n; i++) {
      count = +1;
    }
    return count;
  };
  ```

## Sum Rule

- If a master algorithm involves two algorithms, the Big-O notation of the master algorithm is the sum of the other two Big-O notations.
- The sum is 6n, so with the coefficient rule, the Big-O notation is O(n)
  ```jsx
  // A function with 2 separate loops whose time complexities can be summed up
  const a = (n) => {
    let count = 0;
    // f(n) = n
    for (let i = 0; i < n; i++) {
      count += 1;
    }
    // f(n) = 5n
    for (let j = 0; j < 5 * n; j++) {
      count += 1;
    }
    return count;
  };
  ```

## Product Rule

- This function includes a nested for loop f(n) = 5n\*n so the Big-O notation is O(n^2)
  ```jsx
  const a = (n) => {
    let count = 0;
    for (let i = 0; i < n; i++) {
      count += 1;
      for (let j = 0; j < n; j++) {
        count += 1;
      }
    }
    return count;
  };
  ```

## Polynomial Rule

- This function has only 1 for loop but it includes a polynomial so the Big-O is O(n^2)
  ```jsx
  const a = (n) => {
    let count = 0;
    for (let i = 0; i < n * n; i++) {
      count += 1;
    }
    return count;
  };
  ```
