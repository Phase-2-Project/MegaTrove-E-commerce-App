import React, {useState} from "react";
import axios from "axios"
import {useSignIn} from "react-auth-kit"
import { useAuth } from "./auth";
import { useNavigate } from "react-router-dom";
function LogIn(){
    const singIn= useSignIn()
    
    const [formData, setFormData] = useState({
        username: "",
        password:""
    })
    async function HandleSubmit(e){
        const auth = useAuth()
        const navigate = useNavigate()
        e.preventDefault()
        try{
            const response = await axios.post('http://ecommerce.muersolutions.com/api/v1/user/login',
            formData)
            singIn({
                token: response.data.token,
                expiresIn: 3600,
                tokenType: "Bearer",
                authState: {username: formData.username}
            })

        }catch(err){
            console.log("error ", err)
        }
        auth.login(formData)
        window.location.assign('/')
    }
        
            // const response= fetch('http://ecommerce.muersolutions.com/api/v1/user/login', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify(values)
            // })
            
            // .then(response => response.json())
            // .then(data => console.log(data))
            // .catch(error => console.log(error))
    
    function handleChange(event){
        const key = event.target.id
        const value= event.target.value
        setFormData({
            ...formData, [key]: value
        })
    }
    return (
        <div id="login">
        <form onSubmit={HandleSubmit}>
            <table>
            <tr><td><label htmlFor="email">Email</label></td>
                <td><input
                    type='username'
                    id='username'
                    value={formData.username}
                    onChange={handleChange}
                /></td></tr>
                
            <tr><td><label htmlFor="password">Password</label></td>
                <td><input
                    type='password'
                    id='password'
                    value={formData.password}
                    onChange={handleChange}
                /></td></tr>
                <tr><td><input type="submit" value="Log in"/></td></tr>
            </table>
        </form>
        </div>
    )
}
export default LogIn