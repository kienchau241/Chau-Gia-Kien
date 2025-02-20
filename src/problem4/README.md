# Sum to N Function Implementations

## Overview
This repository provides three unique implementations of a function to calculate the summation of all numbers from 1 to `n`. Each implementation demonstrates a different approach.

## Implementations

### Implementation A: Iterative Approach
```typescript
function sum_to_n_a(n:number): number {
    let sum =0;
    for(let i=1;i<=n;i++){
        sum+=i;
    }
	return sum ;
}
```

### Implementation B: Mathematical Formula
```typescript
function sum_to_n_b(n: number): number {
	return n*(n+1)/2 ;
}
```

### Implementation C: Recursive Approach
```typescript
function sum_to_n_c(n: number): number {
    if (n <= 0) return 0;
    return n + sum_to_n_c(n - 1);
}
```

## Usage
To use any of these implementations, call the respective function with an integer `n`:
```typescript
console.log(sum_to_n_a(5)); // Output: 15
console.log(sum_to_n_b(5)); // Output: 15
console.log(sum_to_n_c(5)); // Output: 15
```

## Setup and Running the Project
This is a Node.js project. Follow these steps to set up and run the project:

### Install Dependencies
```sh
npm install
```

### Run the Project
```sh
npm start
```

## Conclusion
- **Iterative (A):** Simple, efficient for most cases.
- **Mathematical (B):** Fastest and best for large numbers.
- **Recursive (C):** Demonstrates recursion but not optimal for large `n` due to stack overflow risk.