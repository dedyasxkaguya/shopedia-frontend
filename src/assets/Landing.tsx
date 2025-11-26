// import React from 'react'

import { Link } from "react-router-dom"

const Landing = () => {
    return (
        <div>
            <main id="hero" className="bg-linear-to-tr from-bg-neutral-50 to-bg-neutral-800 flex justify-center items-center flex-col">
                <span className="text-6xl">
                    Shopedia
                </span>
                <span className="text-4xl my-4 niggerspan">
                    An e-commerce website to cover your needs
                </span>
                <span className="text-2xl text-neutral-800">
                    Everytime , Everywhere All At Once
                </span>
                <div className="my-4 text-xl flex gap-4">
                    <Link to={'/user/login'} className="p-2 rounded-xl border border-neutral-50 text-white shadow duration-500 hover:text-black hover:bg-neutral-50" >
                        Login
                    </Link>
                    <Link to={'/user/register'} className="p-2 rounded-xl border border-neutral-50 bg-neutral-50 shadow duration-500 hover:opacity-75" >
                        Register
                    </Link>
                </div>
            </main>
        </div>
    )
}

export default Landing