# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is JSX? What is one syntax difference between HTML and JSX?

Your answer: JSX is the language used to write code in React. JSX is similar to HTML but the difference is you can input JavaScript expressions into it using curly brackets {}. Also, when naming elements you need to camelcase them like you would with JavaScript instead of lowercase with HTML.

Researched answer: JSX stands for JavaScript XML, it is a syntax extension of JavaScript. It allows us to directly write HTML in React within JavaScript code. One syntax difference between JSX and HTML is that JSX uses camelcase notation for naming HTML attributes. For example, tableindex in HTML is tableIndex in JSX.

2. What is yarn? What file(s) are modified in a React application when you run the command yarn in your terminal?

Your answer: Yarn stands for yet another resource manager. It is a package manager created by Facebook to overcome the slow download from npm. I think all the React files are modified/created when you run the command yarn in your terminal.

Researched answer: Yarn stands for yet another resource negotiator. It is a package manager created by Facebook to overcome the slow download from npm. When you run the command yarn in your terminal it creates the dependencies. It builds the React app and the files that are modified are the js, css, and assets files.

3. What is a React component?

Your answer: A React component is a specific type of function that can contain JavaScript logic and returns markup that gets rendered to the browser.

Researched answer: A React component is a specific type of function that can contain JavaScript logic and returns markup that gets rendered to the browser. React components are the building blocks of React and there are mainly two types of components: class and functional. Functional components are simply javascript functions. We can create a functional component in React by writing a javascript function. Class components can work with each other. We can pass data from one class component to other class components and call on the component in App.js

4. What is the difference between state values and props in React?

Your answer: State is a variable that holds component's current state of things. Props stands for properties, which is a JavaScript object used for commmunication between components.

Researched answer: State is a variable that holds component's current state of things. It can be broken down into logic, when the component is holding data in a state variable, or display, which doesn't hold state, really just there to display. Props stands for properties, which is a JavaScript object used for commmunication between components, one directional flow of communication from a component to a nested component via the component call.

5. What is the DOM?

Your answer: The DOM stands for document object model, which is the visual representation of your code.

Researched answer: DOM stands for Document Object Model. It is a programming interface that allows us to create, change, or remove elements from the document. We can also add events to these elements to make our page more dynamic.

6. STRETCH: Which is the difference between a div and a span?

Your answer:

Researched answer:

## Looking Ahead: Terms for Next Week

1. Object-oriented programming: Object-Oriented Programming (OOP) is a programming paradigm in computer science that relies on the concept of classes and objects. It is used to structure a software program into simple, reusable pieces of code blueprints (usually called classes), which are used to create individual instances of objects.

2. Ruby: Ruby is a computer programming language developed in 1995 by Yukihiro Matsumoto. He wanted to create a flexible, object-oriented language that programmers would enjoy using. They enjoyed it enough that Ruby became one of the most popular languages for developing web applications. 

3. Implicit return: Implicit return is when a function is returned values without using the return keyword

4. Ruby blocks: Ruby blocks are anonymous functions that can be passed into methods. Blocks are enclosed in a do-end statement or curly braces {}. do-end is usually used for blocks that span through multiple lines while {} is used for single line blocks. Blocks can have arguments which should be defined between two pipe | characters.

5. Ruby hashes: In Ruby, Hash is a collection of unique keys and their values. Hash is like an Array, except the indexing is done with the help of arbitrary keys of any object type. In Hash, the order of returning keys and their value by various iterators is arbitrary and will generally not be in the insertion order. The default value of Hashes is nil. When a user tries to access the keys which do not exist in the hash, then the nil value is returned.
