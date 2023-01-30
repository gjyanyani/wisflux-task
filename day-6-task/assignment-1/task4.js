// Sorting arrays in both ascending and descending


let numbers = [0, 1, 2, 3, 10, 20, 30];
numbers.sort((a, b) => a - b);

console.log("Ascending arrays= ",numbers);


numbers.sort((a,b)=> b-a);
console.log("Descending arrays= ",numbers);