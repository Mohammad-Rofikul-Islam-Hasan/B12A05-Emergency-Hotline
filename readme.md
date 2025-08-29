\*\*Question 1: What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer:
getElementById -> Select single element by ID.
getElementsByClassName -> Select collection of elements by class name.
querySelector -> Select single/first element by css selectors.
querySelectorAll -> Select collection of elements by css selectors.

\*\*Question 2: How do you create and insert a new element into the DOM?

Answer:
const newElement = document.createElement('div');
parentElement.appendChild(newElement);

\*\*Question 3: What is Event Bubbling and how does it work?

Answer: Event bubbling propagates upward through its ancestor elements in the DOM tree from the target element that triggered.

\*\*Question 4: What is Event Delegation in JavaScript? Why is it useful?

Answer: Event delegation is the technique of attaching a single event listener to a parent element to handle events triggered by its child elements.

\*\*Question 4: What is the difference between preventDefault() and stopPropagation() methods?

Answer:
preventDefault() -> Stops the browser's default action for the event.
stopPropagation() -> Stops the event from bubbling up or capturing down the DOM tree.
