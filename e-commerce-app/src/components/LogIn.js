// import React, {useState} from "react";
// import {useSignIn} from "react-auth-kit"
// function LogIn(){
//     const singIn= useSignIn()
//     const [formData, setFormData] = useState({
//         email: "",
//         password:""
//     })
//     function HandleSubmit(values){
//         values.preventDefault()
//             const response= fetch('http://ecommerce.muersolutions.com/api/v1/user/login'+values, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(formData)
//             })
//             singIn({
//                 token: response.data.token,
//                 expiresIn: 3600,
//                 tokenType: "Bearer",
//                 authState: {email: values.email, password: values.password}
//             })

//             // .then(response => response.json())
//             // .then(data => console.log(data))
//             // .catch(error => console.log(error))
//     }
//     function handleChange(event){
//         const key = event.target.id
//         const value= event.target.value
//         setFormData({
//             ...formData, [key]: value
//         })
//     }
//     return (
//         <div id="login">
//         <form onSubmit={HandleSubmit}>
//             <table>
//             <tr><td><label htmlFor="email">Email</label></td>
//                 <td><input
//                     type='email'
//                     id='email'
//                     value={formData.email}
//                     onChange={handleChange}
//                 /></td></tr>
                
//             <tr><td><label htmlFor="password">Password</label></td>
//                 <td><input
//                     type='password'
//                     id='password'
//                     value={formData.password}
//                     onChange={handleChange}
//                 /></td></tr>
//                 <tr><td><input type="submit" value="Sign Up"/></td></tr>
//             </table>
//         </form>
//         </div>
//     )
// }
// export default LogIn








// LogIn.js
import React, { useState } from "react";
import { useSignIn } from "react-auth-kit";

function LogIn() {
  const signIn = useSignIn();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleSubmit(event) {
    event.preventDefault();

    fetch("http://ecommerce.muersolutions.com/api/v1/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Assuming data contains the token
        // You may need to update this based on the actual response from the server
        signIn({
          token: data.token,
          expiresIn: 3600,
          tokenType: "Bearer",
          authState: { email: formData.email, password: formData.password },
        });
      })
      .catch((error) => console.log(error));
  }

  function handleChange(event) {
    const key = event.target.id;
    const value = event.target.value;
    setFormData({
      ...formData,
      [key]: value,
    });
  }

  return (
    <div id="login">
      <form onSubmit={handleSubmit}>
        <table>
          <tr>
            <td>
              <label htmlFor="email">Email</label>
            </td>
            <td>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="password">Password</label>
            </td>
            <td>
              <input
                type="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <td>
              <input type="submit" value="Sign In" />
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
}

export default LogIn;






















// import React, { useState } from 'react';
// import { useSignIn } from 'react-auth-kit'; // Step 1: Import the useSignIn hook

// function LogIn() {
//   const signIn = useSignIn(); // Step 1: Get the signIn function from the useSignIn hook
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });

//   function handleSubmit(event) {
//     event.preventDefault();
    
//     // Step 2: Use the signIn function to handle the login logic and make the API request
//     signIn(
//       {
//         email: formData.email,
//         password: formData.password
//       },
//       // Optional callback functions for success and error cases
//       {
//         onSuccess: (response) => {
//           console.log('Login successful!', response);
//           // Perform any necessary actions upon successful login (e.g., redirect to dashboard)
//         },
//         onError: (error) => {
//           console.error('Login failed!', error);
//           // Perform any necessary actions upon login failure (e.g., display error message)
//         }
//       }
//     );
//   }

//   function handleChange(event) {
//     const key = event.target.id;
//     const value = event.target.value;
//     setFormData({
//       ...formData,
//       [key]: value
//     });
//   }

//   return (
//     <div id="login">
//       <form onSubmit={handleSubmit}>
//         <table>
//           <tr>
//             <td>
//               <label htmlFor="email">Email</label>
//             </td>
//             <td>
//               <input
//                 type="email"
//                 id="email"
//                 value={formData.email}
//                 onChange={handleChange}
//               />
//             </td>
//           </tr>
//           <tr>
//             <td>
//               <label htmlFor="password">Password</label>
//             </td>
//             <td>
//               <input
//                 type="password"
//                 id="password"
//                 value={formData.password}
//                 onChange={handleChange}
//               />
//             </td>
//           </tr>
//           <tr>
//             <td>
//               <input type="submit" value="Log In" />
//             </td>
//           </tr>
//         </table>
//       </form>
//     </div>
//   );
// }

// export default LogIn;
