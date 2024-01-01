// Mouse Event

function clickHandler() {
    console.log("Click event is called");
}

function dbClickHandler() {
    console.log("dbClickHandler event is called");
}

function onMouseOverHandler() {
    console.log("onMouseOverHandler event is called");
}

function onMouseOutHandler() {
    console.log("onMouseOutHandler event is called");
}

document.getElementById("clickButton").onclick = function clickHandler() {
    console.log("Click event is called");
}

document.getElementById("doubleClickButton").ondblclick = function dbClickHandler() {
    console.log("dbClickHandler event is called");
}

document.getElementById("hoverDiv").onmouseover = function onMouseOutHandler() {
    console.log("onMouseOverHandler event is called");
}

document.getElementById("hoverDiv").onmouseout = function onMouseOutHandler() {
    console.log("onMouseOutHandler event is called");
}

// Keyboard Event

function onkeydownHandler() {
    console.log("onkeydownHandler event is called");
}


function onkeyupHandler() {
    console.log("onkeyupHandler event is called");
}

function onkeypressHandler() {
    console.log("onkeypressHandler event is called");
}

document.getElementById("keyInput").onkeydown = function onkeydownHandler(params) {
    console.log("onkeydownHandler event is called");
}

document.getElementById("keyInput").onkeyup = function onkeyupHandler() {
  console.log("onkeyupHandler event is called");
};

document.getElementById("keyInput").onkeypress = function onkeypressHandler() {
  console.log("onkeypressHandler event is called");
};

// Form Events

function onsubmitHandler() {
    console.log("onsubmitHandler event is called");
}

function onfocusHandler() {
    console.log("onfocusHandler event is called");
}

function onblurHandler() {
    console.log("onblurHandler event is called");
}

document.getElementById("myForm").onsubmit = function onsubmitHandler() {
  console.log("onsubmitHandler event is called");
};

document.getElementById("formInput").onfocus = function onfocusHandler() {
  console.log("onfocusHandler event is called");
};

document.getElementById("formInput").onblur = function onblurHandler() {
  console.log("onblurHandler event is called");
};

// Mouse Event

function addEvent() {
    console.log("Click event is called");
}
document.getElementById("clickButton").addEventListener("click", addEvent)

document.getElementById("doubleClickButton").addEventListener("dblclick", (e) => {
    console.log(e);
    // console.log("dbClickHandler event is called")
    // console.log(this)
})

document.getElementById("hoverDiv").addEventListener("mouseover", function () {
    console.log("onMouseOverHandler event is called");
})

document.getElementById("hoverDiv").addEventListener("mouseout", function () {
    console.log("onMouseOutHandler event is called");
})

// Keyboard Event
document.getElementById("keyInput").addEventListener("keydown", function () {
    console.log("onkeydownHandler event is called");
})

document.getElementById("keyInput").addEventListener("keyup", function () {
    console.log("onkeyupHandler event is called");
})

document.getElementById("keyInput").addEventListener("keypress", function () {
    console.log("onkeypressHandler event is called");
})

// Form Events

document.getElementById("myForm").addEventListener("submit", function () {
    console.log("onsubmitHandler event is called");
})

document.getElementById("myForm").addEventListener("focus", function () {
    console.log("onfocusHandler event is called");
})

document.getElementById("myForm").addEventListener("blur", function () {
    console.log("onblurHandler event is called");
})

// Named function for alert
function showAlert() {
    console.log("Hello");
}

// getting the button element
const alertButtonEl = document.getElementById("alertButton")

// Add addEventListener to the element
alertButtonEl.addEventListener("click", showAlert)

// Named function for removing event
function removeAlert() {
    alertButtonEl.removeEventListener("click", showAlert)
}

// getting the remove button element
const removeButtonEl = document.getElementById("removeButton")

removeButtonEl.addEventListener("clicl", removeAlert)

// Add event listener to the div
document.getElementById("parentDiv").addEventListener("click", function (event) {
    alert("Div clicked! Event Phase" + event.eventPhase)
}, true)    // Capturing

// Add event listener to the li
document.getElementById("item1").addEventListener("click", function (event) {
    alert("Item 1 clicked! Event Phase" + event.eventPhase)
}, false)   // Bubbling Phase

document.getElementById("item2").addEventListener("click", function (event) {
    alert("Item 2 clicked! Event Phase" + event.eventPhase)
}, false)   // Bubbling Phase

// Add event listener to outer div
document.getElementById("outerDiv").addEventListener("click", function (event) {
    alert("Outer Div Clicked! Event Phase" + event.eventPhase)
}, false)   // Bubbling Phase

// Add event listener to middle div
document.getElementById("middleDiv").addEventListener("click", function (event) {
    alert("Middle Div Clicked! Event Phase" + event.eventPhase)
}, false)   // Bubbling Phase

// Add event listener to inner div
document.getElementById("innerDiv").addEventListener("click", function (event) {
    alert("Inner Div Clicked! Event Phase" + event.eventPhase)
}, false)   // Bubbling Phase

// Add a single event listener to the ul
document.getElementById("itemList").addEventListener("click", function (event) {
  const clickedEl = event.target;
  //Check if the clicked element is a list item
  console.log(clickedEl.tagName);
  if (clickedEl.tagName === "LI") {
    const itemNumber = clickedEl.getAttribute("data-item");
    console.log(`You clicked item ${itemNumber}`);
  }
});

//Access the button element
const buttonEl = document.getElementById("actionButton");
//single click
buttonEl.addEventListener("click", function () {
  console.log("Btn was clicked");
});

//docuble click
buttonEl.addEventListener("dblclick", function () {
  console.log("Btn was double clicked");
});

//Mouse enter
buttonEl.addEventListener("mouseenter", function () {
  console.log("mouseenter");
});

//Mouse leave
buttonEl.addEventListener("mouseleave", function () {
  console.log("mouseleave");
});

// Accessing the username input and submit button
const usernameEl = document.getElementById("username");
const submitButtonEl = document.getElementById("submitButton");

//Create  a custom
const usernameSubmitted = new CustomEvent("usernameSubmitted", {
  bubbles: true,
  cancelable: true,
  detail: { text: "" },
});

//Attach an event listener to handle the custom event
document.addEventListener("usernameSubmitted", function (event) {
  console.log(`Username is ${event.detail.text} has been submitted`);
});

//Attach an event listener to the submit button

submitButtonEl.addEventListener("click", function () {
  // Populate the detail property with the input value
  usernameSubmitted.detail.text = usernameEl.value;
  //dispatch custom event
  document.dispatchEvent(usernameSubmitted);
});