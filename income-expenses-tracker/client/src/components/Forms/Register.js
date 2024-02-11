import React, {useContext, useEffect, useState} from 'react'
import { Link, useNavigate } from "react-router-dom"
import {authContext} from "../context/AuthContext/AuthContext"
import Loading from '../Loading/Loading'

const Register = () => {
    const { registerUserAction } = useContext(authContext)
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(true)

    useEffect(() => {
            const timer = setTimeout(() => {
            setIsLoading(false)
        }, 2000)

        return () => clearTimeout(timer)
    })
    
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
    const onSubmitHandler = async (e) => {
        e.preventDefault()
        try {
            setIsLoading(true)
            // dispatch action
            if (!email || !password || !fullname) {
                return alert("Please provide all details")
            }
            await registerUserAction(formData, navigate)
        } catch (error) {
            setError(error.message || "An error occurred")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div>
            {isLoading ? (
                <Loading />
            ) : (
                <section className="py-24 md:py-32 bg-white">
                    <div className="container px-4 mx-auto">
                        <div className="max-w-sm mx-auto">
                            <h3 className="mb-4 text-2xl md:text-3xl font-bold">
                                Register for an account
                            </h3>
                            <p>
                                {error && (
                                    <span className='text-red-500'>{error}</span>
                                )}
                            </p>
                        </div>
                        <form onSubmit={onSubmitHandler}>
                            <div className="mb-6">
                                <label htmlFor="Email" className="block mb-2 text-coolGray-800 font-medium">
                                    Email
                                </label>
                                <input type="email" name="email" autoComplete="email" value={email} onChange={onChangeInput} className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-sm placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50" placeholder="service@example.com" />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="fullname" className="block mb-2 text-coolGray-800 font-medium">
                                    Full Name
                                </label>
                                <input type="text" autoComplete="full name" value={fullname} onChange={onChangeInput} name="fullname" className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-sm placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50" placeholder="I-Novotek Academy"/>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="" className="block mb-2 text-coolGray-800 font-medium">
                                    Password
                                </label>
                                <input type="password" name="password" autoComplete="password" value={password} onChange={onChangeInput} className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-sm placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50" placeholder='************' />
                            </div>
                            <div className="flex flex-wrap items-center justify-between mb-6">
                                <button className="inline-block py-3 px-7 mb-6 w-full text-base text-green-50 font-medium text-center leading-6 bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md shadow-sm" type="submit">
                                    Register
                                </button>
                                <p className="text-center">
                                    <span className="text-xs font-medium">
                                        Already have an account? <Link className="inline-block text-xs font-medium text-green-500 hover:text-green-600 hover:underline" to="/login">Sign In</Link>
                                    </span>
                                </p>
                            </div>
                        </form>
                    </div>
                </section>
            )}
        </div>
    )
}

export default Register