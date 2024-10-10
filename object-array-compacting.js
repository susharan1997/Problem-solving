const obj = {
  a: null,
  b: false,
  c: true,
  d: 0,
  e: 1,
  f: '',
  g: 'a',
  h: [null, false, '', true, 1, 'a', { i: 0, j: 2}],
  k: { l: 0, m: false, n: 'a', o: [0, 1] }
};

const compactFunc = (item) => {
  const data = Array.isArray(item) ? item.filter(Boolean) : item;
  console.log(data, 'ITEM\n');
  return Object.entries(data).reduce(
    (acc, [key, value]) => {
      console.log(acc, '|', key, ':', value);
      if(Boolean(value))
        acc[key] = (typeof value === 'object') ? compactFunc(value) : value;
      return acc;
    },
    Array.isArray(item) ? [] : {}
    )
}

console.log(compactFunc(obj));

// output ->

// {
//     a: null,
//     b: false,
//     c: true,
//     d: 0,
//     e: 1,
//     f: '',
//     g: 'a',
//     h: [ null, false, '', true, 1, 'a', { i: 0, j: 2 } ],
//     k: { l: 0, m: false, n: 'a', o: [ 0, 1 ] }
//   } ITEM
  
//   {} | a : null
//   {} | b : false
//   {} | c : true
//   { c: true } | d : 0
//   { c: true } | e : 1
//   { c: true, e: 1 } | f : 
//   { c: true, e: 1 } | g : a
//   { c: true, e: 1, g: 'a' } | h : [ null, false, '', true, 1, 'a', { i: 0, j: 2 } ]
//   [ true, 1, 'a', { i: 0, j: 2 } ] ITEM
  
//   [] | 0 : true
//   [ true ] | 1 : 1
//   [ true, 1 ] | 2 : a
//   [ true, 1, 'a' ] | 3 : { i: 0, j: 2 }
//   { i: 0, j: 2 } ITEM
  
//   {} | i : 0
//   {} | j : 2
//   { c: true, e: 1, g: 'a', h: [ true, 1, 'a', { j: 2 } ] } | k : { l: 0, m: false, n: 'a', o: [ 0, 1 ] }
//   { l: 0, m: false, n: 'a', o: [ 0, 1 ] } ITEM
  
//   {} | l : 0
//   {} | m : false
//   {} | n : a
//   { n: 'a' } | o : [ 0, 1 ]
//   [ 1 ] ITEM
  
//   [] | 0 : 1
//   {
//     c: true,
//     e: 1,
//     g: 'a',
//     h: [ true, 1, 'a', { j: 2 } ],
//     k: { n: 'a', o: [ 1 ] }
//   }