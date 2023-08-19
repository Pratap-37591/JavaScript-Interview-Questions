function findDuplicate(arr) {
  let duplicates = arr.filter(
    (ele, index, array) => array.indexOf(ele) !== index
  );
  return duplicates;
}

const arr = [2, 4, 2, 3, 9, 3,9];
const duplicatesValues = findDuplicate(arr);
console.log(duplicatesValues);
