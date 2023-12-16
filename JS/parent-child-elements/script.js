// Accessing Parent Elements
const parentEl = document.getElementById("parent")
// Accessing grandparent element
const grandParentEl = parentEl.parentNode

// Accessing Child elements
const firstChildEl = parentEl.firstChild
const lastChildEl = parentEl.lastChild

console.log(firstChildEl);
console.log(lastChildEl);

// Accessing Element Children only
const firstElementChild = parentEl.firstElementChild
const lastElementChild = parentEl.lastElementChild

console.log(firstElementChild);
console.log(lastElementChild);