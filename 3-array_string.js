{
  /**Reverse String */
}

// function revStr(str) {
//   str = str.split("");
//   let start = 0;
//   let end = str.length - 1;

//   while (start < end) {
//     let temp = str[start];
//     str[start] = str[end];
//     str[end] = temp;

//     start++;
//     end--;
//   }
//  return str.join("")
// }

// console.log(revStr("hello"))

{
  /**find second largest */
}

// let arr = [1,2,5,6,3]

// let largest = -Infinity;
// let secLargest = -Infinity;

// for (let i = 0; i < arr.length; i++) {

//    if (arr[i]>largest) {
//       secLargest = largest
//       largest=arr[i]
//    } else if(arr[i]>secLargest && arr[i] !== largest){
//       secLargest = arr[i]
//    }

// }

// if(secLargest === -Infinity){
//    console.log("there is no second largest")
// }

// else{
//    console.log(secLargest)
// }

{
  /**remove duplicate value */
}

//best approach
// let a=[1,2,1,3,4,1,2]
//  a = [...new Set(a)]
// console.log(a)

// let arr = [1,2,1,3,4,1,2]
// let newArr = []

// for (let i = 0; i < arr.length; i++) {
//    if(!newArr.includes(arr[i])){
//       newArr.push(arr[i])
//    }

// }
// console.log(newArr)

{
  /**Rotate elements in Array */
}

//left rotate

// function reverse(arr,start,end) {
//    while (start<end) {
//       for (let i = 0; i < end; i++) {
//         let temp = arr[start]
//         arr[start]=arr[end]
//         arr[end]=temp

//         start++
//         end--
//       }
//    }
// }
//  let arr =[1,2,3,4,5]
//  let k = 2
//   k = k%arr.length
// reverse(arr,0,k-1)
// reverse(arr,k,arr.length-1)
// reverse(arr,0,arr.length-1)
// console.log(arr)

// Right rotate

// function reverse(arr,start,end) {
//    while (start<end) {
//       for (let i = 0; i < end; i++) {
//         let temp = arr[start]
//         arr[start]=arr[end]
//         arr[end]=temp

//         start++
//         end--
//       }
//    }
// }
//  let arr =[1,2,3,4,5]
//  let k = 2
//   k = k%arr.length
// reverse(arr,0,arr.length-1)
// reverse(arr,0,k-1)
// reverse(arr,k,arr.length-1)
// console.log(arr)

{
  /**Analog */
}

// function isAnalog(s, t) {

//   s = s.toLowerCase().replace(/\s+/g, "");
//   t = t.toLowerCase().replace(/\s+/g, "");

//   if (s.length !== t.length) return false;
//   let freq = {};
//   for (const ch of s) {
//     freq[ch] = (freq[ch] || 0) + 1;
//   }
//   for (const ch of t) {
//     if(!freq[ch]) return false
//      freq[ch]--
//   }
//   return true
// }

// console.log(isAnalog("silent", "listen"));

// function isAnalog(s, t) {

//   s = s.toLowerCase().replace(/\s+/g, "");
//   t = t.toLowerCase().replace(/\s+/g, "");

//   return s.split("").sort().join("")===t.split("").sort().join("")

// }

// console.log(isAnalog("silent ", "listen"));

{
  /**Palindrome */
}

// function isPalindrome(str) {
//   str = str.toLowerCase().replace(/[^a-z0-9]/g, "");
//   let start = 0;
//   let end = str.length - 1;

//   while (start < end) {
//     if (str[start] !== str[end]) {
//       return false;
//     }
//     start++;
//     end--;
//   }
//   return true;
// }
// console.log(isPalindrome("m@Adam "))

{
  /**Frequency Character */
}

// function freq(char){
//   char = char.toLowerCase().replace(/[^a-z0-9]/g,"")
//   let frq = {}
//   for (const ch of char) {
//     frq[ch] = (frq[ch] || 0) +1;
//   }
//   return frq
// }
// console.log(freq("bAnana"))

//To Pointer
{
  /**Remove vowels */
}

// function remVowel(str) {
//   let vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
//   str = str.split("")
//   let left = 0;
//   let right =0;
//   while (right<str.length) {
//      if(!vowels.has(str[right])){
//       str[left] = str[right]
//       left++
//      }
//      right ++
//   }
//   return str.slice(0,left).join("")
// }
// console.log(remVowel("Nakul"));

{
  /**Sliding window technique */
}

//find max sum of elements

// function max(arr,k){
//   let windowSum = 0
//   let maxSum = 0

//   for (let i = 0; i < k; i++) {
//      windowSum += arr[i]
//   }
//    maxSum = windowSum

//    {/**Sliding window */}
//   for (let i = k; i < arr.length; i++){
//         windowSum+=arr[i]
//         windowSum-=arr[i-k]
//         maxSum = Math.max(maxSum,windowSum)

//   }
//   return maxSum

// }
// console.log(max([2,1,5,1,3,2],3))

{
  /**find max length */
}

// function length(s){
//   let set = new Set()
//   let left = 0
//   let maxLen = 0
//   for (let i = 0; i < s.length; i++) {

//     if(set.has(s[i])){
//       set.delete(s[left])
//       left++
//     }
//     set.add(s[i])
//     maxLen = Math.max(maxLen, i-left+1)
//   }
//   return maxLen
// }
// console.log(length("abcabcbb"))

{
  /**Prifix sum */
}

function Prifix(arr) {
  let prifix = new Array(arr.length)
  prifix[0] = arr[0]
  for (let i = 1; i < arr.length; i++) {
    prifix[i] = prifix[i-1]+arr[i];
    
  }
  return prifix
}
console.log(Prifix([1, 2, 3, 4, 5]));
