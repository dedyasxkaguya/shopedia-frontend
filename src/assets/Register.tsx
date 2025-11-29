import axios from 'axios'
import Inputtext from './components/Inputtext'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
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
                const fetched = data.data
                if (!fetched.status) {
                    console.log(fetched.message)
                    if(fetched.data.errorInfo[2].includes('Duplicate')){
                        Swal.fire({
                            icon:'error',
                            title:'error',
                            text:'This email is already registered'
                        })
                    }
                    return
                }

                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'You have register to Shopedia'
                })
                // console.table(fetched)
                // console.log(fetched.data.id)
                setTimeout(() => {
                    location.href = `/home/${fetched.data.id}`
                }, 2000);
            })
    }
    const handleGoogle = () => {
        Swal.fire({
            icon: 'info',
            title: 'sorry',
            text: "This feature hasnt added yet",
            confirmButtonText: "Okay i get it"
        })
    }
    return (
        <div className='flex justify-center items-center h-[100dvh]'>
            <form action="  " className='border border-black flex flex-col gap-4 p-4 rounded-2xl overflow-hidden'>
                <div className="flex flex-col gap-2">
                    <span className='text-4xl font-bold '>Register</span>
                    <span className='text-sm font-light'>Lets create an account for you</span>
                </div>
                <Inputtext type='text' id='name' placeholder='Name' />
                <Inputtext type='email' id='email' placeholder='Email' />
                <Inputtext type='password' id='password' placeholder='Password' />
                <Link to={'/user/login'} className='text-xs text-purple-600 text-decoration-underline registerbtn duration-500 hover:text-neutral-50 '>
                    Already have an account ? Login now</Link>
                <button type="button" onClick={() => handleRegister()}
                    className='p-2 text-neutral-50 bg-neutral-800 rounded-lg duration-500 shadow-md hover:opacity-80'>Register</button>
                <span className='text-xs text-center'>OR</span>
                <button type="button" className='p-2 text-neutral-800 bg-neutral-50 border border-neutral-800 rounded-lg duration-500 shadow-md  hover:text-neutral-50 hover:bg-neutral-800' onClick={() => handleGoogle()}>
                    <i className="bi bi-google mx-2"></i>
                    Google
                </button>
            </form>
        </div>
    )
}

export default Register