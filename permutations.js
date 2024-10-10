
// problem to generate all possible permutations of a given set of array integers

const permutations = arr => {
  if (arr.length <= 2) return arr.length === 2 ? [arr, [arr[1], arr[0]]] : arr;
  return arr.reduce(
    (acc, item, i) =>
      acc.concat(
        permutations([...arr.slice(0, i), ...arr.slice(i + 1)]).map(val => {
          return [
          item,
          ...val,
        ]
        
        })
      ),
    []
  );
};

console.log(permutations([1, 33, 5]), '<- INTEGER PERMUTATIONS');

//output ->

// [
//     [ 1, 33, 5 ],
//     [ 1, 5, 33 ],
//     [ 33, 1, 5 ],
//     [ 33, 5, 1 ],
//     [ 5, 1, 33 ],
//     [ 5, 33, 1 ]
// ]


//STRING PERMUTATIONS:-

//problem to generate all possible permutations of a given string of characters.

const stringPermutation = (str) => {
    if(str.length <= 2) return str.length === 2 ? [str, str[1] + str[0]] : [str];
    
    return str.split('').reduce(
      (acc, item, i) => 
        acc.concat(
          stringPermutation(str.slice(0, i) + str.slice(i + 1)).map(val => item + val)
        ),
        []
      );
  }
  
  console.log(stringPermutation('abc'), '<- STRING PERMUTATIONS');

//output:-

//[ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]