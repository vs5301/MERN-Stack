import { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { authContext } from "../context/AuthContext/AuthContext"
import Loading from '../Loading/Loading'

const Login = () => {
  const { loginUserAction, userAuth } = useContext(authContext)
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  // form data
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const { email, password } = formData
  
  // onChange
  const onChangeInput = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  // submit
  const onSubmitHandler = async e => {
    e.preventDefault()
    try {
      setIsLoading(true)
      // dispatch action
      await loginUserAction(formData, navigate)
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
            <div className="max-w sm mx-auto">
              <div className="mb-6 text-center">
                <h3 className="mb-4 text-2xl md:text-3xl font-bold">
                  Sign in to your account
                </h3>
                <p>
                  {userAuth?.error && (
                    <span className="text-red-500">{userAuth?.error}</span>
                  )}
                  {error && (
                    <span className='text-red-500'>{error}</span>
                  )}  
                </p>
              </div>
              <form onSubmit={onSubmitHandler}>
                <div className="mb-6">
                  <label htmlFor="email" className="block mb-2 text-coolGray-800 font-medium">
                    Email
                  </label>
                  <input type="email" name="email" value={email} autoComplete='email' onChange={onChangeInput} placeholder="support@example.com" className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lgshadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50" />
                </div>
                <div className="mb-4">
                  <label htmlFor="password" className="block mb-2 text-coolGray-800 font-medium">
                    Password
                  </label>
                  <input type="password" value={password} name="password" placeholder="**********" autoComplete='current password' onChange={onChangeInput} className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lgshadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50" />
                </div>
                <div className="flex flex-wrap items-center justify-between mb-6">
                  <div className="w-full md:w-1/2">
                    <label className="relative inline-flex items-center">
                      <input type="checkbox" className="form-checkbox appearance-none" />
                    </label>
                  </div>
                </div>
                <button type="submit" className="inline-block py-3 px-7 mb-6 w-full text-base text-green-50 font-medium text-center leading-6 bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md shadow-sm">
                  {isLoading ? <Loading /> : 'Login'}
                </button>
                <p className="text-center">
                  <span className="text-xs font-medium">
                    Don't have an account?&nbsp;
                  </span>
                  <Link className="inline-block text-xs font-medium text-green-500 hover:text-green-600 hover:underline" to="/register">Sign Up</Link>
                </p>
              </form>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

export default Login