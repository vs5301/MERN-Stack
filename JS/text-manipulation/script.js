// Using textContent to update the blog title
const blogTitleEl = document.getElementById("title")

console.log(blogTitleEl);
blogTitleEl.textContent =  "New Blog Title"

// change background
blogTitleEl.style.background = "red"
blogTitleEl.style.color = "white"

// using innerHTML to add another paragraph with some HTML content
const paragraphEl = document.getElementById("paragraph")
console.log(paragraphEl);

paragraphEl.innerHTML = '<h1>I have changed the paragraph</h1>'

paragraphEl.innerHTML += "<br> <strong>This is a new paragraph text with strong formatting</strong>"

// Using innerText to modify the comment section 
const firstCommentEl = document
    .getElementById("comment1")
    .querySelector(".commentText")
console.log(firstCommentEl);

firstCommentEl.innerText = "Updated first comment. This is important"