import React, {useState} from "react";
import {AuthProvider, useSignIn} from "react-auth-kit"
function Login(){
    const singIn= useSignIn()
    const [formData, setFormData] = useState({
        email: "",
        password:""
    })
    function HandleSubmit(values){
        e.preventDefault()
            const response= fetch('http://ecommerce.muersolutions.com/api/v1/user/login'+values, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            singIn({
                token: response.data.token,
                expiresIn: 3600,
                tokenType: "Bearer",
                authState: {email: values.email, password: values.password}
            })

            // .then(response => response.json())
            // .then(data => console.log(data))
            // .catch(error => console.log(error))
    }
    function handleChange(event){
        const key = event.target.id
        const value= event.target.value
        setFormData({
            ...formData, [key]: value
        })
    }
    return (
        <form onSubmit={HandleSubmit}>
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
                <tr><td><input type="submit" value="Sign Up"/></td></tr>
            </table>
        </form>
    )
}