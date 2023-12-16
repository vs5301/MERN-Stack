// Get first product card
const firstProductCardEl = document.querySelector('.product-card')
console.log(firstProductCardEl);
// Get highest-rated product
const highestRatingEl = document.querySelector("[data-rating='4.8']")
console.log(highestRatingEl);

// Get first laptop category product
const laptopEl = document.querySelector("[data-category='laptop']")

// selecting an id
const dashboardEl = document.querySelector("#dashboard")
console.log(laptopEl);

// Select all product cards
const productCardEls = document.querySelectorAll(".product-card")

// Extract and log names of all products
const productNameEls = document.querySelectorAll(".product-name")

productNameEls.forEach((el) => {
    console.log(el);
})

// Select and log all prices of laptop category products
const laptopPricesEl = document.querySelectorAll('[data-category="laptop"]')
console.log(laptopPricesEl);

laptopPricesEl.forEach((el) => {
    console.log(el.textContent);
})

// Select all products with a rating above 4.6
const highestRatingsEl = document.querySelectorAll(
    '[data-rating="4.7"], [data-rating="4.8"]'
)

highestRatingsEl.forEach((el) => console.log(el.innerHTML))