import axios from 'axios'
import Inputtext from './components/Inputtext'
import { Link } from 'react-router-dom'
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
        <div className='flex justify-center items-center h-[100dvh]'>
            <form action="  " className='border border-black flex flex-col gap-4 p-4 rounded-2xl overflow-hidden'>
                <div className="flex flex-col gap-2">
                    <span className='text-4xl font-bold font-light'>Register</span>
                    <span className='text-sm'>Lets create an account for you</span>
                </div>
                <Inputtext type='text' id='name' placeholder='Name' />
                <Inputtext type='email' id='email' placeholder='Email' />
                <Inputtext type='password' id='password' placeholder='Password' />
                <Link to={'/user/login'} className='text-xs text-purple-600 text-decoration-underline registerbtn duration-500 hover:text-neutral-50 '>
                    Already have an account ? Login now</Link>
                <button type="button" onClick={() => handleRegister()}
                    className='p-2 text-neutral-50 bg-neutral-800 rounded-lg duration-500 shadow-md hover:opacity-80'>Login</button>
                <span className='text-xs text-center'>OR</span>
                <button type="button" className='p-2 text-neutral-800 bg-neutral-50 border border-neutral-800 rounded-lg duration-500 shadow-md  hover:text-neutral-50 hover:bg-neutral-800'>
                    <i className="bi bi-google mx-2"></i>
                    Google
                </button>
            </form>
        </div>
    )
}

export default Register