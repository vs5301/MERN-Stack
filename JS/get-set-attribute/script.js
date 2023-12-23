const product1ImageEl = document
    .getElementById("product1")
    .querySelector("img")

console.log(product1ImageEl);

product1ImageEl.setAttribute('src',
    'https://cdn.pixabay.com/photo/2017/11/27/21/31/computer-2982270_1280.jpg'
)

product1ImageEl.setAttribute('alt', 'my new product')

const product1LinkEl = document.getElementById("product1").querySelector("a")
console.log(product1LinkEl);

product1LinkEl.setAttribute("href", "new.html")
console.log(product1LinkEl);

const imagesEl = document.getElementById("imageGallery").querySelectorAll("img")

var imagesByAlice = []

// use getAttribute to filter images by author
imagesEl.forEach((img) => {
    const author = img.getAttribute('data-author')
    console.log(author);
    if (author === 'Alice') {
        imagesByAlice.push(img)
    }
})

imagesByAlice.forEach((img) => console.log(img))

imagesEl.forEach((img) => {
    if (!imagesByAlice.includes(img)) {
        img.style.display = "none"
    }
})