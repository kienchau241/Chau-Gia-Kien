"use strict";
function sum_to_n_a(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
function sum_to_n_b(n) {
    return 1;
}
function sum_to_n_c(n) {
    return 1;
}
const a = sum_to_n_a(5);
console.log(a);
