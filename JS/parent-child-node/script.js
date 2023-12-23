// Select list item using data attribute
const selectedItemEl = document.querySelector('[data-item="fruit"]')

// Navigate to parent <ul> element
const parentListEl = selectedItemEl.parentNode
// Navigate to grandparent
const grandParentEl = parentListEl.parentNode

// Navigate to great grandparent
const greatGrandParentEl = grandParentEl.parentNode

const outerDiv = document.getElementById("outerDiv")

const firstChildEl = outerDiv.childNodes[0]

const innerDiveEl = outerDiv.childNodes[1]
const innerDivFirstChildEl = innerDiveEl.childNodes[0]

const nestedListEl = innerDiveEl.childNodes[1]
console.log(nestedListEl.textContent);