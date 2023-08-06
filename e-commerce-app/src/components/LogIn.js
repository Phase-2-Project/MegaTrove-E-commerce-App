import React, {useEffect, useState} from "react";
import NavBar from "./NavBar";
function LogIn(){
    const [signedUpData, setSignedUpData] = useState([])
    
    const [formData, setFormData] = useState({
        username: "",
        password:""
    })

        useEffect(()=> {fetch('http://localhost:3001/users', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            
            .then(response => response.json())
            .then(data => setSignedUpData(data))
            .catch(error => console.log(error))
            // setIsLoggedIn(true)
            // window.location.assign("/")
          },[]) 

    
    const [userConfirmed,setUserConfirmed] = useState(false)
    const confirmed = signedUpData.map((user) => {
      // const SignUpDetails =JSON.parse(user)
      if( user.email === formData.username && user.password === formData.password){
        setUserConfirmed(true)
      }
      else{
        
      }
      return (null)
    })
    // console.log(confirmed)
    
    


    function handleChange(event){
        const key = event.target.id
        const value= event.target.value
        setFormData({
            ...formData, [key]: value
        })
    }
    return (
        <div id="login">
        <form >
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