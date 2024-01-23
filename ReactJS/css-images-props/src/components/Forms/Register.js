import React, { useState } from 'react'

const Register = () => {

    // initial
    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        password: "",
    })

    // onchange handler
    const onChangeHandler = (e) => {
        console.log(e);
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        console.log(formData);
    }

    /*
    const [fullname, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // onchange fullname
    const onChangeFullName = (e) => {
        setFullName(e.target.value)
    }

    // onchange email
    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    // onchange password
    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }

    // submit handler
    const onFormSubmit = (e) => {
        // prevent page refresh
        e.preventDefault()
        console.log({
            fullname,
            email,
            password
        });
    }
    */

    return (
        <div>
            <h2>Register Form</h2>
            <form onSubmit={submitHandler}>
                <div>
                    <input onChange={onChangeHandler} type="text" placeholder='Full name' value={formData.fullname} name='fullname'/>
                </div>
                <div>
                    <input onChange={onChangeHandler} type="email" placeholder="Email" value={formData.email} name='email'/>
                </div>
                <div>
                    <input onChange={onChangeHandler} type="password" placeholder="Password" value={formData.password} name='password'/>
                </div>
                <button type='submit'>Register</button>
            </form>
        </div>
    )
}

export default Register