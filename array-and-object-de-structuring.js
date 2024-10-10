// ARRAY DESTRUCTURING:-


const arr = [1,2,3,4,5,6,7,8,9,10];

const [a, b, c, , ...d] = arr; //<- Here, element 4 has been skipped in the output due to the declaration of the extra comma b/w c & ...d.

console.log(a, b, c, d, '<- ARRAY DE-STRUCTURING');

//Output:-

// 1 2 3 [ 5, 6, 7, 8, 9, 10 ] <- ARRAY DE-STRUCTURING



// OBJECT DESTRUCTURING:-

const obj = {
    w : 1,
    x : 2,
    y : 3,
    z : 4
}

const { w, y : v, ...rest } = obj; //Here, in the case of y : m, the value of y is assigned to a newly declared variable m.

console.log(w, v, rest, '<- OBJECT DE-STRUCTURING');

// Output:-

// 1 3 { x: 2, z: 4 } <- OBJECT DE-STRUCTURING



// NESTED OBJECT DESTRUCTURING:-

const nested = { l: { l1: 1, l2: 2 }, m: [1, 2]};

const { 
    l : {
        l1 : f,
        ...g
    },
    ...h
 } = nested;

 console.log(f, g, h, '<- NESTED DESCTUCTURING');

 // Output:-

 // 1 { l2: 2 } { m: [ 1, 2 ] } <- NESTED DESCTUCTURING



// ADVANCED DESTRUCTURING:-

 const arr1 = [ 5, 'b', 4, 'd', 'e', 'f', 2 ];

 const {                      // Here, the keys (5,0,2) are taken as array indices
    5 : x,
    0 : y,
    2 : z,
    length : count,           // calculates the length of the array arr.
    name = 'array',           //Here, name = 'array' represents the default assignment operator. Since there is no item called name in arr,
    ...restData               // name takes the default value 'array' that has been assigned to it.
 } = arr1;

 console.log(x,y,z,count,name,restData, '<- ADVANCED DESTRUCTURING');

//Output:-

// f 5 4 7 array { '1': 'b', '3': 'd', '4': 'e', '6': 2 } <- ADVANCED DESTRUCTURING