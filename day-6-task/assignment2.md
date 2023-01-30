Q.1. Why do we use functions in JavaScript?

Functions are one of the fundamental building blocks in JavaScript. A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output. 

------------------------------------

Q.2. What is Function Invocation?

The JavaScript Function Invocation is used to execute the function code and it is common to use the term “call a function” instead of “invoke a function”. The code inside a function is executed when the function is invoked. 

............................................

Q.3. Does a function behave like an object in Javascript? Prove it by an example.

Yes, in JS world a function is considered an object, and to explain the reason why we will have to learn about types. Types in JavaScript are categorized by:

Primitives (string, number, null, boolean, undefined, symbol): these are immutable data types. They are not objects, don't have methods and they are stored in memory by value.
Non-Primitives (functions, arrays and objects): these are mutable data types. They are objects and they are stored in memory by reference.

Example::=>>
// Function declaration.
function showFavoriteIceCream() {
  const favIceCream = 'chocolate';

  console.log(`My favorite ice cream is ${favIceCream}`);
}

// Let's assign a property.
showFavoriteIceCream.flavours = ['chocolate', 'vanilla', 'strawberry'];

// Let's log the showFavoriteIceCream function.
console.log(showFavoriteIceCream);

// Log
// { [Function: showFavoriteIceCream]
// flavours: [ 'chocolate', 'vanilla', 'strawberry' ] } -> property assigned

.................................................................

Q.4. What are Events in Javascript?

JavaScript's interaction with HTML is handled through events that occur when the user or the browser manipulates a page.

When the page loads, it is called an event. When the user clicks a button, that click too is an event. Other examples include events like pressing any key, closing a window, resizing a window, etc.

............................................................

Q.5. What is a string in JS?

JavaScript strings are for storing and manipulating text. A JavaScript string is zero or more characters written inside quotes.

...........................................................

Q.6. What is an array? Is it static or dynamic in Javascript?

An array is an ordered collection of data.
Arrays are used to store multiple values in a single variable. This is compared to a variable that can store only one value.
Each item in an array has a number attached to it, called a numeric index, that allows you to access it. In JavaScript, arrays start at index zero and can be manipulated with various methods.

JavaScript Arrays are Dynamic in nature which means, the length of the array can be modified at run time (when necessary).

----------------------------------------------------------------

Q.7. Difference between Map and Set?

Map==>>
Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.

let map = new Map();

map.set('1', 'str1');   // a string key
map.set(1, 'num1');     // a numeric key
map.set(true, 'bool1'); // a boolean key

// remember the regular Object? it would convert keys to string
// Map keeps the type, so these two are different:
alert( map.get(1)   ); // 'num1'
alert( map.get('1') ); // 'str1'

alert( map.size ); // 3



Set==>>
A Set is a special type collection – “set of values” (without keys), where each value may occur only once.

let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// visits, some users come multiple times
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

// set keeps only unique values
alert( set.size ); // 3

for (let user of set) {
  alert(user.name); // John (then Pete and Mary)
}

-----------------------------------------------------------------

Q.8. Difference between Array and Map?

Arrays==>>>
Arrays are a data structure that stores data of any type in a list-like Javascript object. You can create an array by explicitly declaring it as in the example below.
Example::==>>
let arr = [1, 2, 'fruit', { id: 1, name: 'charlie' }, ['a', 'b']];


Each item in an array has an index starting from 0. You can access each item using its index.

arr[0] // 1
arr[4] // ['a', 'b'];
You can change the value of an item at a certain index.


arr[3] = 9 // arr = [1, 2, 'fruit', 9, ['a', 'b']];
Get the index of the array item by the value


arr.indexOf('fruit'); // 2
You can add items to an empty or non-empty array using either of the following methods.


//add item to the end of the array
arr.push('vegetable') // arr = [1, 2, 'fruit', 9, ['a', 'b'], 'vegetable'];
arr[6] = 2 // arr = [1, 2, "fruit", 9, ['a', 'b'], 'vegetable', 2];


Map==>>>
Maps are objects that store items as key-value pairs. The keys can be of any data type as long as each key is unique. Values can also be of any data type, but not necessarily unique. To create a new map object, you need to call its constructor.

Example::
let mapObj = new Map();
Use Map.prototype.set(key, value) to add a new key-value pair to the map object.


//mapObj.set(key, value)
mapObj.set(1, "cat");
mapObj.set('name', 'smith');
You can access a value stored in the map using its key and Map.prototype.get(key) method.


//mapObj.get(key)
mapObj.get('name'); // 'smith'
You can use the previous set method to change the value of a stored item.


mapObj.set(1, 'dog');
mapObj.get(1)  // 'dog'

-----------------------------------------------------

Q.9. What are array methods in JS ? List a few names?

A pair of square brackets [] represents an array in JavaScript. All the elements in the array are comma(,) separated.

In JavaScript, arrays can be a collection of elements of any type. This means that you can create an array with elements of type String, Boolean, Number, Objects, and even other Arrays.

Here is an example of an array with four elements: type Number, Boolean, String, and Object.

Methods:

array.push();    //insert new element in array
array.pop();  // remove an element from array
array.isArray(value); // The method returns true if the passed value is an array.

push() – Insert an element at the end of the array.
unshift() – Insert an element at the beginning of the array.
pop() – Remove an element from the end of the array.
shift() – Remove an element from the beginning of the array.
slice() – Create a shallow copy of an array.
Array.isArray() – Determine if a value is an array.
length – Determine the size of an array

----------------------------------------------------------

Q.10. In how many ways can we traverse through an array in Javascript?

for..loop
while..loop
forEach() method
map()
filter()
reduce()
