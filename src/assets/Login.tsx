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
        <div>Login
            <form action="">
                <input type="text" id='email' placeholder='Email' />
                <input type="password" id='password' placeholder='Password' />
                {/* <input type="submit" value="Login" onClick={()=>handleLogin()}/> */}
                <button type="button" onClick={() => handleLogin()}>Login</button>
            </form>
        </div>
    )
}

export default Login