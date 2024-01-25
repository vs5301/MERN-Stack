import React, {useContext, useState} from 'react'
import { Link } from "react-router-dom"
import {authContext} from "../context/AuthContext/AuthContext"

const Register = () => {
    const { registerUserAction, error } = useContext(authContext)
    // form data
    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        password: "",
    })
    // Destructure
    const { fullname, email, password } = formData
    // onChange
    const onChangeInput = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    // Handle submit
    const onSubmitHandler = (e) => {
        e.preventDefault()
        if (!email || !password || !fullname) {
            return alert("Please provide all details")
        }
        registerUserAction(formData)
    }

    return (
        <div>
            <section className="py-24 md:py-32 bg-white">
                <div className="container px-4 mx-auto">
                    <div className="max-w-sm mx-auto">
                        <h3 className="mb-4 text-2xl md:text-3xl font-bold">
                            Register for an account
                        </h3>
                    </div>
                    <form onSubmit={onSubmitHandler}>
                        <div className="mb-6">
                            <label htmlFor="Email" className="block mb-2 text-coolGray-800 font-medium">
                                Email
                            </label>
                            <input type="email" name="email" value={email} onChange={onChangeInput} className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-sm placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50" placeholder="service@example.com" />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="fullname" className="block mb-2 text-coolGray-800 font-medium">
                                Full Name
                            </label>
                            <input type="text" value={fullname} onChange={onChangeInput} name="fullname" className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-sm placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50" placeholder="I-Novotek Academy"/>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="" className="block mb-2 text-coolGray-800 font-medium">
                                Password
                            </label>
                            <input type="password" name="password" value={password} onChange={onChangeInput} className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-sm placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50" placeholder='************' />
                        </div>
                        <div className="flex flex-wrap items-center justify-between mb-6">
                            <button className="inline-block py-3 px-7 mb-6 w-full text-base text-green-50 font-medium text-center leading-6 bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md shadow-sm" type="submit">
                                Register
                            </button>
                            <p className="text-center">
                                <span className="text-xs font-medium">
                                    Already have an account? <Link to="/login">Sign In</Link>
                                </span>
                            </p>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Register