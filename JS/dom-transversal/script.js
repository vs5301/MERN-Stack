function createTask(newTask) {
    const taskEl = document.createElement("div")
    taskEl.setAttribute("class", "task")
    taskEl.className = "task"
    const taskTextNodeEl = document.createTextNode(newTask)
    taskEl.appendChild(taskTextNodeEl)
    document.getElementById('container').appendChild(taskEl)
}

createTask("Programming")
createTask("Go Shopping")
createTask("Meeting")
createTask("Studying")

function addStudent(name, grade) {
    const studentEl = document.createElement("div")
    studentEl.className = "student"
    const studentTextNode = document.createTextNode(`${name}: ${grade}`)
    studentEl.appendChild(studentTextNode)
    const containerEl = document.getElementById("studentList")
    var beforeNode = null

    for (const child of containerEl.children) {
        const childGrade = parseInt(child.textContent.split(":")[1])
        if (grade < childGrade) {
            beforeNode = child
            break;
        }
    }

    containerEl.insertBefore(studentEl, beforeNode)
    console.log(containerEl.children);
}

addStudent("Emma", 90)
addStudent("Ben", 84)
addStudent("Alice", 100)

function replaceArticle(articleId, newContent) {
    const existingArticle = document.getElementById(articleId)
    const newArticleEl = document.createElement("div")
    newArticleEl.className = "article"
    newArticleEl.id = articleId 
    const newTextNode = document.createTextNode(newContent)
    newArticleEl.appendChild(newTextNode)
    existingArticle.parentNode.replaceChild(newArticleEl, existingArticle)
}

replaceArticle("article1", "Some content 1")
replaceArticle("article2", "Some content 2")

function addFruit(name) {
    const ulEl = document.getElementById("fruitList")
    const li = document.createElement("li")
    li.className = "fruit"
    li.textContent = name;
    ulEl.appendChild(li)
}

addFruit("Apple")
addFruit("Banana")
addFruit("Cherry")
addFruit("Kiwi")
addFruit("Date")
addFruit("Papaya")

function removeFruit(name) {
    const ulEl = document.getElementById("fruitList")
    let fruitFound = false
    
    for (const li of ulEl.children) {
        if (li.textContent === name) {
            fruitFound = true
            ulEl.removeChild(li)
            break;
        }
    }

    document.getElementById("message").textContent = fruitFound
        ? `${name} was removed from the list`
        :`${name} not found in the list`
}

removeFruit("Kiwi")

//select the p element
const p = document.getElementById("textElement");
// p.classList.add("highlight", "bold", "italic");
// p.classList.add("bold");
// p.classList.add("italic");

//function to add class
function addClass() {
  p.classList.add("highlight", "bold", "italic");
}

//removeClass
function removeClass() {
  p.classList.remove("highlight", "bold", "italic");
}

//toggleClass
function toggleClass() {
  p.classList.toggle("italic");
}

//checkContains
function checkContains() {
  alert(
    p.classList.contains("highlight")
      ? "Contains Highlight"
      : "Does not not contain Higlight"
  );
}

//replaceClass
function replaceClass() {
  if (p.classList.contains("italic")) {
    p.classList.replace("italic", "red-text");
  } else {
    p.classList.add("red-text");
  }
}

//listItem
function listItem() {
  alert("The first clas is:" + p.classList.item(0));
}

//getValue
function getValue() {
  console.log(p.classList.value);
}
