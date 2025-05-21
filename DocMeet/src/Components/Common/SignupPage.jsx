<<<<<<< HEAD
import React from "react";
import "../../assets/styles/signUpPage.css"
import signUp from "../../assets/images/signUpImage.jpg"

function SignupPage() {

    return (
        <div
            className="container-fluid"
            style={{
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#f8f9fa",
                backgroundImage: "linear-gradient(to right, #a1ffce, #faffd1)", // Subtle gradient effect
            }}
        >
            <div
                className="registration-wrapper"
                style={{
                    display: "flex",
                    alignItems: "stretch",
                    justifyContent: "center",
                    width: "80%",
                    maxWidth: "1000px",
                    borderRadius: "15px",
                    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
                    backgroundColor: "#fff",
                    overflow: "hidden",
                    transition: "transform 0.3s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
                <div
                    className="image-container"
                    style={{
                        flex: "1",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <img
                        src={signUp}
                        alt="Registration Logo"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            filter: "brightness(0.9)",
                            transition: "filter 0.3s ease",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.filter = "brightness(1)")}
                        onMouseLeave={(e) => (e.currentTarget.style.filter = "brightness(0.9)")}
                    />
                </div>
                <div
                    className="form-container"
                    style={{
                        flex: "1",
                        padding: "40px",
                        backgroundColor: "white",
                        borderRadius: "0 15px 15px 0",
                        boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.1)",
                    }}
                >
                    <h1
                        style={{
                            textAlign: "center",
                            marginBottom: "20px",
                            color: "#248a83",
                            fontWeight: "600",
                        }}
                    >
                        SignUp
                    </h1>
                    <input
                        type="text"
                        name="uname"
                        placeholder="Enter Username"
                        className="input"
                        style={{
                            width: "100%",
                            padding: "12px",
                            margin: "10px 0",
                            borderRadius: "5px",
                            border: "1px solid #ccc",
                            transition: "border-color 0.3s ease",
                        }}
                        onFocus={(e) => (e.target.style.borderColor = "#248a83")}
                        onBlur={(e) => (e.target.style.borderColor = "#ccc")}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter Email"
                        className="input"
                        style={{
                            width: "100%",
                            padding: "12px",
                            margin: "10px 0",
                            borderRadius: "5px",
                            border: "1px solid #ccc",
                            transition: "border-color 0.3s ease",
                        }}
                        onFocus={(e) => (e.target.style.borderColor = "#248a83")}
                        onBlur={(e) => (e.target.style.borderColor = "#ccc")}
                    />
                    <input
                        type="password"
                        name="upass"
                        placeholder="Enter Password"
                        className="input"
                        style={{
                            width: "100%",
                            padding: "12px",
                            margin: "10px 0",
                            borderRadius: "5px",
                            border: "1px solid #ccc",
                            transition: "border-color 0.3s ease",
                        }}
                        onFocus={(e) => (e.target.style.borderColor = "#248a83")}
                        onBlur={(e) => (e.target.style.borderColor = "#ccc")}
                    />
                    <button
                        className="button"
                        style={{
                            backgroundColor: "#248a83",
                            color: "white",
                            width: "100%",
                            padding: "12px",
                            borderRadius: "5px",
                            marginTop: "10px",
                            fontSize: "16px",
                            fontWeight: "600",
                            transition: "background-color 0.3s ease",
                        }}
                        onMouseEnter={(e) => (e.target.style.backgroundColor = "#1c6d65")}
                        onMouseLeave={(e) => (e.target.style.backgroundColor = "#248a83")}
                    >
                        Register
                    </button>
                    <button
                        className="link"
                        style={{
                            background: "none",
                            border: "none",
                            color: "#248a83",
                            cursor: "pointer",
                            marginTop: "10px",
                            display: "block",
                            textAlign: "center",
                            textDecoration: "underline",
                            transition: "color 0.3s ease",
                        }}
                        onMouseEnter={(e) => (e.target.style.color = "#1c6d65")}
                        onMouseLeave={(e) => (e.target.style.color = "#248a83")}
                    >
                        Already have an account? Click here to login.
                    </button>
                </div>
=======
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate,Link } from 'react-router-dom'

function SignupPage() {
    let navigate = useNavigate()

    const [signUpData, setsignUpData] = useState({})
    const [errors, setError] = useState({})

    const handleOnChange = (e) => {
        setsignUpData({
            ...signUpData,
            [e.target.name]: e.target.value
        })
    }

    const signUpValidation = () => {
        let newErrors = {}

        if (!signUpData.fullname || signUpData.fullname.trim().length < 3) {
            newErrors.fullname = "Full Name must be at least 3 characters"
        }
        if (!signUpData.email || !/^\S+@\S+\.\S+$/.test(signUpData.email)) {
            newErrors.email = "Invalid email address"
        }
        if (!signUpData.password || !/^[a-z0-9]{3,30}$/.test(signUpData.password)) {
            newErrors.password = "Password must be 3-30 characters and lowercase letters/numbers only"
        }
        if (!signUpData.birthday) {
            newErrors.birthday = "Birthday is required"
        } 
        else 
        {
            const today = new Date()
            const birthDate = new Date(signUpData.birthday)
            
            const age = today.getFullYear() - birthDate.getFullYear()
            const monthDiff = today.getMonth() - birthDate.getMonth()
            const dayDiff = today.getDate() - birthDate.getDate()
        
            if (age < 18 || (age === 18 && (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)))) {
                newErrors.birthday = "You must be at least 18 years old"
            }
        }
        return newErrors
    }

    const handleSignUpClick = (e) => {
        e.preventDefault()

        const newErrors = signUpValidation()
        if (Object.keys(newErrors).length > 0) {
            setError(newErrors)
            return
        }

        axios.post(`http://localhost:5001/docmeet/user/signup`, signUpData)
            .then(() => {
                console.log("Successfully Added")
            })
            .catch((err) => {
                console.log("Not Successfully Added", err)
            })
        setsignUpData({})
        setError({})
    }

    return (
        <div className='min-h-[80vh] flex items-center mt-4'>
            <div className='flex flex-col gap-2 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>
                <div>
                    <p className='text-2xl font-semibold'>SignUp</p>
                    <p className='text-sm text-zinc-500'>Please sign up to book appointment</p>
                </div>
                <div className='w-full'>
                    <label className='block text-sm font-medium text-zinc-700'>Full Name</label>
                    <input
                        name="fullname"
                        className='border border-zinc-300 rounded w-full p-2 mt-1'
                        type='text'
                        onChange={((e) => { handleOnChange(e) })}
                        value={signUpData.fullname ? signUpData.fullname : ''}
                    />
                    {errors.fullname ? <p className="text-red-500 text-xs mt-1">{errors.fullname}</p> : ''}
                </div>
                <div className='w-full mt-3'>
                    <label className='block text-sm font-medium text-zinc-700'>Birthday</label>
                    <input
                        name="birthday"
                        className='border border-zinc-300 rounded w-full p-2 mt-1'
                        type='date'
                        onChange={((e) => { handleOnChange(e) })}
                        value={signUpData.birthday ? signUpData.birthday : ''}
                    />
                    {errors.birthday ? <p className="text-red-500 text-xs mt-1">{errors.birthday}</p> : ''}
                </div>
                <div className='w-full mt-3'>
                    <label className='block text-sm font-medium text-zinc-700'>Email</label>
                    <input
                        name="email"
                        className='border border-zinc-300 rounded w-full p-2 mt-1'
                        type='email'
                        onChange={((e) => { handleOnChange(e) })}
                        value={signUpData.email ? signUpData.email : ''}
                    />
                    {errors.email ? <p className="text-red-500 text-xs mt-1">{errors.email}</p> : ''}
                </div>
                <div className='w-full mt-3'>
                    <label className='block text-sm font-medium text-zinc-700'>Password</label>
                    <input
                        name="password"
                        className='border border-zinc-300 rounded w-full p-2 mt-1'
                        type='password'
                        onChange={((e) => { handleOnChange(e) })}
                        value={signUpData.password ? signUpData.password : ''}
                    >
                    </input>
                    {errors.password ? <p className="text-red-500 text-xs mt-1">{errors.password}</p> : ''}
                </div>
                <button className='bg-[#5D6BFF] text-white w-full py-2 !rounded-lg text-base mt-3' onClick={handleSignUpClick}>SignUp</button>
                <p>Already have an account ? <Link to="/user/signin"><span className='text-[#5D6BFF] underline cursor-pointer'>SignIn Here</span></Link></p>
>>>>>>> main
            </div>
        </div>
    );
}

<<<<<<< HEAD
export default SignupPage;
=======
export default SignupPage
>>>>>>> main
