import axios from 'axios'
import { Link } from 'react-router-dom'
import Inputtext from './components/Inputtext'
import Swal from 'sweetalert2'
// import React from 'react'

const Login = () => {
    // useEffect(()=>{
    //     
    // },[])
    const handleLogin = () => {
        const emailElement = document.getElementById("email") as HTMLInputElement
        const passwordElement = document.getElementById("password") as HTMLInputElement
        if (emailElement.value && passwordElement.value) {
            const data = {
                email: emailElement.value,
                password: passwordElement.value
            }
            axios.post("http://127.0.0.1:8000/api/user/login", data)
                .then(data => {
                    const fetched = data.data
                    if (!fetched.status) {
                        console.log("akun tidak ditemukan")
                        return
                    }
                    const id = fetched.data.id
                    const name = fetched.data.name
                    Swal.fire({
                        icon: 'success',
                        title: "Success",
                        text: `SUccesfully login as ${name}`
                    })
                    setTimeout(() => {
                        location.href = `/home/${id}`
                    }, 1600);
                })
        } else {
            Swal.fire({
                icon: 'warning',
                title: "Warning",
                text: `You need to fill out every forms`
            })
        }
    }
    return (
        <div className='flex justify-center items-center h-[100dvh]'>
            <form action="" className='border border-black flex flex-col gap-4 p-4 rounded-2xl overflow-hidden'>
                <div className="flex flex-col gap-2">
                    <span className='text-4xl font-bold'>Login</span>
                    <span className='text-sm font-light'>Use your account to access Shopedia</span>
                </div>
                {/* <input type="text" id='email' placeholder='Email' className='p-2 border border-neutral-800 rounded-lg w-[24dvw]' /> */}
                <Inputtext placeholder='Email' type='email' id='email' />
                <Inputtext placeholder='Password' type='password' id='password' />
                {/* <input type="password" id='password' placeholder='Password' className='p-2 border border-neutral-800 rounded-lg w-[24dvw]' /> */}
                <Link to={'/user/register'} className='text-xs text-purple-600 text-decoration-underline registerbtn duration-500 hover:text-neutral-50 '>
                    New to shopedia ? register now</Link>
                {/* <a href="" className='registerbtn'>blablabla</a> */}
                {/* <input type="submit" value="Login" onClick={()=>handleLogin()}/> */}
                <button type="button" onClick={() => handleLogin()} className='p-2 text-neutral-50 bg-neutral-800 rounded-lg duration-500 shadow-md hover:opacity-80'>Login</button>
                <span className='text-center text-xs'>OR</span>
                <button type="button" onClick={() => handleLogin()} className='p-2 text-neutral-800 bg-neutral-50 border border-neutral-800 rounded-lg duration-500 shadow-md  hover:text-neutral-50 hover:bg-neutral-800'>
                    <i className="bi bi-google mx-2"></i>
                    Google
                </button>
            </form>
        </div>
    )
}

export default Login