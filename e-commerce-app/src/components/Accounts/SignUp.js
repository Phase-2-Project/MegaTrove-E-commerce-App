import React, {useState} from 'react'

function SignUp(){

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Sign Up</h1>
                <label for="email">Email</label>
                <input
                    type='email'
                    id='email'
                    value={formData.email}
                    onChange={handleChange}
                />
                <label for="phone">Phone No.</label>
                <input
                    type='number'
                    id='phone'
                    value={formData.phone}
                    onChange={handleChange}
                />
            <label for="password">Password</label>
                <input
                    type='password'
                    id='password'
                    value={formData.password}
                    onChange={handleChange}
                />
            </form>
        </div>
    )
}

export default SignUp