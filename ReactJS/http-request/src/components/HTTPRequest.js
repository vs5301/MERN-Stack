import React, { useEffect, useState } from 'react'
import axios from 'axios'

const HTTPRequest = () => {

    // error
    // loading
    // data

    const apiURL = 'https://jsonplaceholder.typicode.com/posts'

    /*
        // using fetch
        useEffect(() => {
            // http request
            fetch(apiURL)
                .then((data) => data.json().then((post) => console.log(post)))
                .catch((err) => console.log(err))
        }, [])  
    */
    
    /*
        // using axios
        useEffect(() => {
            // http call
            axios
                .get(apiURL)
                .then((post) => console.log(post))
                .catch((err) => console.log(err))
        }, [])
    */
    
    // async /await
    useEffect(() => {
        axios.get(apiURL)
        const fetchData = async () => {
            try {
                const response = await axios.get(apiURL)
                console.log(response.data);
            } catch (error) {
                console.log(error.message);
            }
        }
        fetchData()
    }, [])
    
  return (
    <div>
        <h1>Making http request using useEffect</h1>
    </div>
  )
}

export default HTTPRequest