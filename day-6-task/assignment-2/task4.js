//Merge two sets in javascript? 

const set1 = new Set(['bobby', 'hadz']);
const set2 = new Set(['com','hadz']);

const set3 = new Set([...set1, ...set2]);
console.log(set3); //  Set(3) { 'bobby', 'hadz', 'com' }