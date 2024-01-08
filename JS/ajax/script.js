const url = "https://jsonplaceholder.typicode.com/posts"

// Create new instance of XMLHttpRequest
const xhr = new XMLHttpRequest()

// Configure the request
xhr.open("GET", url, true)

// Attach an event listener to handle changes in the request state
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        // parse json data
        console.log(JSON.parse(xhr.responseText));
    }

    // Handle errors
    if (xhr.readyState === 4 && xhr.status !== 200) {
        console.log(xhr.statusText);
    }
}

// send the request
xhr.send()

// Using Promise based
const fetchData = () => {
    fetch(url).then((response) => {
        console.log(response.json());
        return response.json()
    }).then((data) => {
        console.log(data);
    }).catch(error => console.log(error))
}

// Using async await
const fetchData2 = async () => {
    try {
        const result = await fetch(url)
        return result.json()
    } catch (error) {
        console.log(error);
    }
}

fetchData2().then((res) => {
    console.log(res);
})

// Using axios

const fetchData3 = () => {
    axios.get(url).then((response) => {
        console.log(response.data)
    }).then((data) => {
        console.log(data);
    }).catch((error) => console.log(error))
}

// Using async await
const fetchData4 = async () => {
    try {
        const response = await axios.get(url)
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }
}