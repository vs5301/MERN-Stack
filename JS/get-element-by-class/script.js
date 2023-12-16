const fictionBookEl = document.getElementsByClassName("fiction")
const nonFictionEl = document.getElementById("nonFictionSection")
const nonFictionBooksinSectionEl = nonFictionEl.getElementsByClassName("non-fiction")
console.log(nonFictionBooksinSectionEl);
console.log(fictionBookEl);

const fictionBooksElArr = Array.from(fictionBookEl)
const fictionBooksElTitle = fictionBooksElArr.map((el) => el.innerHTML)
console.log(fictionBooksElTitle);