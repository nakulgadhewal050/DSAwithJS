{
  /**count number */
}

// let a = 12345

// let num = String(a)
// let count = 0

// for (let i = 0; i < num.length; i++) {
//    count ++

// }

// console.log(count)

// let num = 12134523434;

// let count = 0;

// while (num > 0) {
//  num = Math.floor(num/10)
//    count++
// }
// console.log(count)

[
  /**Reverse number */
];

// let a = 1234
// let reverse = 0
// while (a>0) {
//     let lastNum= a%10
//     reverse = reverse*10+lastNum
//     a = Math.floor(a/10)
// }
// console.log(reverse)

{
  /**Palindrom */
}

// let a =121
// let original = a
// let reverse=0

// while (a>0) {
//     let lastNum = a%10
//     reverse=reverse*10+lastNum
//     a=Math.floor(a/10)
// }
// if(original===reverse){
//     console.log("palindrom")
// }
// else{
//     console.log("not palindrom")
// }

{
  /**GCD */
}

// let a = 12;
// let b = 18;

// while (b !== 0) {
//   let remainder = a % b;
//   a = b;
//   b = remainder;
// }
// console.log("GCD:", a);

{
  /** LCM */
}
// let a = 12;
// let b = 18;
// let x = a;
// let y = b;

//  while (b !== 0) {
//   let remainder = a % b;
//   a = b;
//   b = remainder;
// }
// let lcm = (x*y)/a
// console.log(lcm)

{
  /**Print number using recursion */
}

// function printNum(num){
//     if(num===0){
//         return
//     }
//     printNum(num-1)
//     console.log(num)
// }
// printNum(5)

{
  /**Factorial */
}

// function fact(num){
//     if(num===0 || num ===1){
//         return 1;
//     }
//     return num * fact(num-1)

// }
// console.log(fact(5))

{
  /**factorial using iterative method */
}

// function factorial(n){
//     let result = 1

//    for (let i = 1; i <= n; i++) {
//         result = result*i
//    }
//    return result

// }
// console.log(factorial(5))

{
  /**fabonacci */
}

// function fabonacci(n) {
//   if (n === 0) return 0;
//   if (n === 1) return 1;

//   return fabonacci(n - 1) + fabonacci(n - 2);
// }
// console.log(fabonacci(8));

{
  /**sum digit */
}

// function sum(n) {
//   if (n === 0) return 0;

//   return (n % 10) + sum(Math.floor(n / 10));
// }
// console.log(sum(12345));

{/**iterative method */}

// function sumDigits(n){
// let sum = 0
//   while (n>0) {
//     sum += n%10
//     n = Math.floor(n/10)
//   }
//   return sum
// }
// console.log(sumDigits(12345))

{/**power */}

// function power(a,b){
//   if(b===0) return 1;
//   return a*power(a,b-1)
// }
// console.log(power(2,3))