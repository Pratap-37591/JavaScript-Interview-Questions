// function add(x){
//     return 10 * x;
// }


// const Memo = (func) => {
//     let cache  = {};
//     return function (x) {
//       if(cache[x]){
//         console.log('result from cahce');
//         console.log(cache);
//         return cache[x];

//       }  else {
//           console.log('result will be calculating');
//           const result = func(x);
//           cache[x] = result;
//           return result;
//       }
//     }
// } 
// // console.log(add(5));

// const calculate = Memo(add);

// console.log(calculate(4));
// console.log(calculate(4));

function add(...data){
  return  data.reduce((total,curr) => total + curr);
}


const Memo = (func) => {
    let cache  = {};
    return function (...args) {
        const keys = JSON.stringify(args);
      if(cache[keys]){
        console.log('result from cahce');
        console.log(cache);
        return cache[keys];

      }  else {
          console.log('result wil    l be calculating');
          const result = func(...args);
          cache[keys] = result;
          return result;
      }
    }
} 
// console.log(add(5));

const calculate = Memo(add);

console.log(calculate(4,4,3,2,4));
console.log(calculate(4,4,3,2,4));
console.log(calculate(4,3,33));
console.log(calculate(4,3,33));
console.log(calculate(4,3,33));