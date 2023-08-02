import React, {useState} from "react";

function Login(){
    const baseURL = 'http://ecommerce.muersolutions.com/api/v1/user/login'

    const [formData, setFormData] = useState({
        email: "",
        password:""
    })
    function HandleSubmit(e){
        e.preventDefault()
            fetch(baseURL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.log(error))
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