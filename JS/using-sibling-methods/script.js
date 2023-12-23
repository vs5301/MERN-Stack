// select buttons
const button1El = document.getElementById("button1")
const button2El = document.getElementById("button2")

// previous sibling method
const text1El = button1El.previousSibling
const text2El = button2El.previousSibling

// Change text content of paragraph
if (text1El.nodeType === 3) {
    text1El.textContent = 'Text 1 has been updated'
}

if (text2El.nodeType === 3) {
    text2El.textContent = 'Text 2 has been updated' 
}

const containerEl = document.getElementById("container")
const buttonsEl = document.querySelectorAll("button")

console.log(buttonsEl);

buttonsEl.forEach((button) => {
    const nextElementEl = button.nextSibling
    console.log(nextElementEl);
    if (nextElementEl && nextElementEl.nodeType === 3) {
        nextElementEl.textContent = "Changed Text"
    }
})

const cherryEl = document.getElementById("cherry")
const previousFruitEl = cherryEl.previousElementSibling

const nextFruit = cherryEl.nextElementSibling
console.log(nextFruit);