// Remove Duplicates From an Array In JavaScript:

const array = [20, 300, 300, 49, 20, 11, 55, 22, 44, 11];

// =========================================================================================================

// 1 Using Set

console.log([...new Set(array)]);

function RemoveDuplicates(arr) {
  // return [...new Set(arr)]
  return Array.from(new Set(arr));
}

console.log(RemoveDuplicates(array));

// =========================================================================================================

// 2 Using filter + indexOf

console.log(array.filter((cur, index, arr) => array.indexOf(cur) === index));

function RemoveDuplicates(arr) {
  return arr.filter((cur, index) => arr.indexOf(cur) === index);
}

console.log(RemoveDuplicates(array));

// =========================================================================================================

// 3 Using reduce + includes

console.log(
  array.reduce((acc, cur) => {
    if (!acc.includes(cur)) {
      acc.push(cur);
    }
    return acc;
  }, [])
);

function RemoveDuplicates(arr) {
  return arr.reduce((acc, cur) => {
    if (!acc.includes(cur)) {
      acc.push(cur);
    }
    return acc;
  }, []);
}

console.log(RemoveDuplicates(array));

// =========================================================================================================

// 4 Using for loop

function RemoveDuplicates(arr) {
  let seen = {};
  let unquie = [];

  for (let i = 0; i < arr.length; i++) {
    if (!seen[arr[i]]) {
      seen[arr[i]] = true;
      unquie.push(arr[i]);
    }
  }
  return unquie;
}

console.log(RemoveDuplicates(array), "For LOOP");
