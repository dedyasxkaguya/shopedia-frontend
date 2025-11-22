import axios from 'axios'
// import React from 'react'

const Register = () => {
    const handleRegister = () => {
        const name = document.getElementById("name") as HTMLInputElement
        const password = document.getElementById("password") as HTMLInputElement
        const email = document.getElementById("email") as HTMLInputElement
        const data = {
            name: name.value,
            email: email.value,
            password: password.value
        }
        axios.post("http://127.0.0.1:8000/api/user/register", data)
            .then(data => {
                if (!data.data.status) {
                    console.log(data.data.message)
                    console.log(data.data)
                    return
                }
                console.log(data.data.message)
                // location.href = '/'
            })
    }
    return (
        <div>Register
            <form action="  ">
                <input type="text" id='name' placeholder='Name'/>
                <input type="email" id='email' placeholder='Email'/>
                <input type="password" id='password' placeholder='Password'/>
                <button type="button" onClick={()=>handleRegister()}>Register</button>
            </form>
        </div>
    )
}

export default Register