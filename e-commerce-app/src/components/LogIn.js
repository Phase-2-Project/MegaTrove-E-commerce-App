import React, { useEffect, useState } from "react";
import axios from "axios"
import { NavLink } from "react-router-dom";
import { toast } from 'react-toastify';

function LogIn({ setIsLoggedIn }) {
    const [signedUpData, setSignedUpData] = useState([])

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })
    const handleSubmit = ( (e) => {
        e.preventDefault()
  
        fetch('http://localhost:3001/users', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })

        .then(response => response.json())
        .then(data => setSignedUpData(data))
        .catch(error => console.log(error))

        //  const stringData =JSON.stringify(formData)
        //  console.log(stringData)
            signedUpData.filter((user) => {
            // const SignUpDetails =JSON.parse(user)
            if (user.email === formData.email && user.password === formData.password) {
                toast.success("welcome" +user.first_name)
                setIsLoggedIn(true)
                return window.location.assign("/")
            }
            else {
                
                // setIsLoggedIn(false)
                return console.log(false)
            }

            })
})
    

    function handleChange(event) {
        const key = event.target.id
        const value = event.target.value
        setFormData({
            ...formData, [key]: value
        })
    }
    return (
        <div id="login">

            <form onSubmit={handleSubmit}>
                <table>
                    <tr><td><label htmlFor="email">Email</label></td>
                        <td><input
                            type='email'
                            id='email'
                            value={formData.email}
                            onChange={handleChange}
                        /></td></tr>

                    <tr><td><label htmlFor="password">Password</label></td>
                        <td><input
                            type='password'
                            id='password'
                            value={formData.password}
                            onChange={handleChange}
                        /></td></tr>
                    <tr><td><input className="log-in" type="submit" value="Log in" /></td></tr>
                    <tr><td><NavLink to="/signup" >
                        Don't have an account? SignUp
                    </NavLink></td></tr>
                </table>
            </form>
        </div>
    )
}

export default LogIn