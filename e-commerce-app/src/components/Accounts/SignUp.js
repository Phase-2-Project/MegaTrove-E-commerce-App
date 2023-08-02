import React, { useState} from 'react'

function SignUp(){
    const [formData, setFormData] = useState({
        email: "",
        phone: "",
        password:""
    })

    function HandleSubmit(e){
        e.preventDefault()
            fetch('http://localhost:4001/users', {
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
        <div>
            <form onSubmit={HandleSubmit}>
                <h1>Sign Up</h1>
                <label htmlFor="email">Email</label>
                <input
                    type='email'
                    id='email'
                    value={formData.email}
                    onChange={handleChange}
                />
                <label htmlFor="phone">Phone No.</label>
                <input
                    type='text'
                    id='phone'
                    value={formData.phone}
                    onChange={handleChange}
                />
            <label htmlFor="password">Password</label>
                <input
                    type='password'
                    id='password'
                    value={formData.password}
                    onChange={handleChange}
                />
                <input type="submit" value="Sign Up"/>
            </form>
        </div>
    )
}
export default SignUp