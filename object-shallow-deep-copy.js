// In the case of nested objects, only the 1st level of object properties 
//get deep copied when that object is destructured within another object.
//The rest of the nested hierarchy gets shallow copied only.
// So, if we need to deep copy any nested object, we need to destructure 
//each level of the nested obj hierarchy as shown in lines 28 -33.

const oldObj = {
  name: 'John',
  description: {
    short: 'Short Description',
    long: 'Long Description',
  }
}

const newObj = {
  ...oldObj,
  job: 'Developer',
}

console.log(newObj.description.short, '<- newObj\n');

oldObj.description.short = 'Hmm, interesting';// nested object
oldObj.name = 'Max';// 1st level

console.log(newObj.description.short, '<- newObj');
console.log(newObj.name, '<- newObj');

const deepCopyObj = {
  ...oldObj,
  description: {
    ...oldObj.description,
  }
}

oldObj.description.short = 'Short Description again';

console.log(deepCopyObj.description.short, '<- deepCopyObj');
console.log(oldObj, 'oldObj');

//Output -> 

// Short Description <- newObj

// Hmm, interesting <- newObj
// John <- newObj
// Hmm, interesting <- deepCopyObj
// {
//   name: 'Max',
//   description: { short: 'Short Description again', long: 'Long Description' }
// } oldObj