Q.1.What is JavaScript?

JavaScript is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc. 

----------------------------------------------------

Q.2. What is the difference between b/w let and var?

The keywords let and var both declare new variables in JavaScript. The difference between let and var is in the scope of the variables they create:

Variables declared by let are only available inside the block where they’re defined.
Variables declared by var are available throughout the function in which they’re declared.

function varScoping() {
  var x = 1;

  if (true) {
    var x = 2;
    console.log(x); // will print 2
  }

  console.log(x); // will print 2
}

function letScoping() {
  let x = 1;

  if (true) {
    let x = 2;
    console.log(x); // will print 2
  }

  console.log(x); // will print 1
}

-----------------------------------------

Q.3. Why do we prefer const over var?

It is just beacuse we can reassign var but const value is fixed, we can not reassign.

-------------------------------------------------

Q.4.What is the use of javascript in web browsers?

JavaScript is a text-based programming language used both on the client-side and server-side that allows you to make web pages interactive. Where HTML and CSS are languages that give structure and style to web pages, JavaScript gives web pages interactive elements that engage a user.
Incorporating JavaScript improves the user experience of the web page by converting it from a static page into an interactive one. To recap, JavaScript adds behavior to web pages.

----------------------------------------------

Q.5. What are objects in javascript?

JavaScript is designed on a simple object-based paradigm. An object is a collection of properties, and a property is an association between a name (or key) and a value. A property's value can be a function, in which case the property is known as a method.

Objects in JavaScript, just as in many other programming languages, can be compared to objects in real life. In JavaScript, an object is a standalone entity, with properties and type. Compare it with a cup, for example. A cup is an object, with properties. A cup has a color, a design, weight, a material it is made of, etc. The same way, JavaScript objects can have properties, which define their characteristics.

-----------------------------------------------

Q.6. What is an array and how is it different from an Object in Javascript?

Objects:>>

Objects are mutable data structure in javascript which is used to represent a ‘Thing’. This could be anything like cars, plants, person, community etc.
It stores the data in key value pair and the key can be anything except for undefined. The keys are iterable and can be accessed in any order.

We can either use a dot operator followed by key name obj.name or a square bracket along with key in string format obj['name'] to access the value.
We can also delete the key from the object.
If you don’t know the key and want to access all the values then you can loop through the object and get them.

Arrays:>>

Arrays are objects only in javascript. The major difference is that they store the data in an ordered collection in which the data can be accessed using a numerical index.

They are also mutable and data can be modified at any index. Indexes are zero based which means the first item is stored at Oth index, second at first and so on, last item is stored at n-1th index.

We can also remove the item from the array using the delete operator, but instead of delete the index, what it does it replaces the value with undefined.

So in order to remove the key we will need to slice the array.
Arrays are iterable and we can loop through each key and access its value.
The problem with this is the length method does returns the count of total item in the array. Instead it returns the last index of the array.

So if the arrays element at 9th index and all other index are empty then we will have undefined at all remaining indexes.


When to use array and when to use object?====>>>>

It is pretty simple if you have to store the data in order or in a sequence then use array otherwise you can use object for everything else.


----------------------------------------------------------

Q.7. wWat is a function in javascript?

Functions are one of the fundamental building blocks in JavaScript. A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output. To use a function, you must define it somewhere in the scope from which you wish to call it.

A function definition (also called a function declaration, or function statement) consists of the function keyword, followed by:

The name of the function.
A list of parameters to the function, enclosed in parentheses and separated by commas.
The JavaScript statements that define the function, enclosed in curly brackets, { /* … */ }.

------------------------------------------------------------

Q.8. How can we implement call by value and call by referencein Javascript?

Call by Value:>>

 Suppose there is a variable named “a”. Now, we store a primitive value(boolean, integer, float, etc) in the variable “a”. Let us store an integer value in “a”, Let a=5. Now the variable “a” stores 5 and has an address location where that primitive value sits in memory.

Now, suppose we copy the value of “a” in “b” by assignment (a=b). Now, “b” points to a new location in memory, containing the same data as variable “a”.

Thus, a=b=5 but both point to separate locations in memory.

This approach is called call by value where 2 variables become the same by copying the value but in 2 separate spots in the memory.

Features of call by value:==>

Function arguments are always passed by value.
It copies the value of a variable passed in a function to a local variable.
Both these variables occupy separate locations in memory. Thus, if changes are made in a particular variable it does not affect the other one.

Example::

// By value (primitives)
    var a = 5;
    var b;
    b = a;
    a = 3;
    console.log(a);     //3
    console.log(b);    //5

Output: “b” was just a copy of “a”. It has its own space in memory. When we change “a” it does not have any impact on the value of “b”. 

Call by reference:>>

Let’s say, we have an object stored in the variable “a”. The variable stores the location or the address where the object lives. Now we set b=a. Now that new variable “b” instead of pointing to a new location in the memory, points to the same location where “a” does. No new object is created, and no copy is created. Both variables point to the same object. This is like having 2 names.

This is called by reference. It behaves quite differently from by value. All objects interact by reference.

Features of By reference:=>

In JavaScript, all objects interact by reference.
If an object is stored in a variable and that variable is made equal to another variable then both of them occupy the same location in memory.
Changes in one object variable affect the other object variable.

Example:
Over here, when we set d=c, “d” points to the same location in memory where “c” does. At first, we have a name-value pair stored in “c”. Now when we change a property using “c”, it changes the property in “d” also because both point to the same object. Changes in one it affects.

Example::
    // By reference (all objects (including functions))
    var c = { greeting : 'Welcome' };
    var d;
    d = c;
      
    // Mutating the value of c
    c.greeting = 'Welcome to geeksforgeeks';
    console.log(c);
    console.log(d);

Output:

{greeting: 'Welcome to geeksforgeeks'}
{greeting: 'Welcome to geeksforgeeks'}

--------------------------------------------------------

Q.9. What are the primitive data types in Javascript?
In JavaScript, a primitive (primitive value, primitive data type) is data that is not an object and has no methods or properties.

String, Number, Boolean , undefined, null

All primitives are immutable; that is, they cannot be altered. It is important not to confuse a primitive itself with a variable assigned a primitive value. The variable may be reassigned to a new value, but the existing value can not be changed in the ways that objects, arrays, and functions can be altered. The language does not offer utilities to mutate primitive values.

..........................................................

Q.10. What is DOM in javascript?

The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.

or

DOM stands for Document Object Model. It is a programming interface that allows us to create, change, or remove elements from the document. We can also add events to these elements to make our page more dynamic.

The DOM views an HTML document as a tree of nodes. A node represents an HTML element.

...........................................................

Q.11. Why do we need DOM?

The Document Object Model (DOM) is the data representation of the objects that comprise the structure and content of a document on the web. This guide will introduce the DOM, look at how the DOM represents an HTML document in memory and how to use APIs to create web content and applications.