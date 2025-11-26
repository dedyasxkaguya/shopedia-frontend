import axios from 'axios'
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
                    console.log(fetched)
                    location.href = `/home/${id}`
                })
        } else {
            console.log("Apacoba")
        }
    }
    return (
        <div className='flex justify-center items-center h-100'>
            <form action="" className='border border-black flex flex-col gap-4 p-4 rounded-2xl'>
                <div className="flex flex-col gap-2">
                    <span className='text-2xl font-bold'>Login</span>
                    <span className='text-xs'>Use your account to access Shopedia</span>
                </div>
                <input type="text" id='email' placeholder='Email' className='p-2 border border-neutral-800 rounded-lg'/>
                <input type="password" id='password' placeholder='Password' className='p-2 border border-neutral-800 rounded-lg'/>
                {/* <input type="submit" value="Login" onClick={()=>handleLogin()}/> */}
                <button type="button" onClick={() => handleLogin()} className='p-2 text-neutral-50 bg-neutral-800 rounded-lg '>Login</button>
            </form>
        </div>
    )
}

export default Login