// import React from 'react'

import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Landing = () => {
    interface Products {
        image: string
    }
    const [product, setImages] = useState<Products[]>()
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(data => {
                const fetched = data.data
                console.table(fetched)
                setImages(fetched)
            })
    }, [])
    return (
        <div>
            <main id="hero" className="bg-linear-to-tr from-bg-neutral-50 to-bg-neutral-800 flex justify-center items-center flex-col w-['70dvw']">
                <span className="text-6xl">
                    Shopedia
                </span>
                <span className="text-4xl my-4 niggerspan">
                    An e-commerce website to cover your needs
                </span>
                <span className="text-2xl mb-4 text-neutral-800 font-light">
                    Everytime , Everywhere All At Once
                    @dedyas {new Date().getFullYear()}
                </span>
                <div className="my-4 text-xl flex gap-4">
                    <Link to={'/user/login'} className="p-2 rounded-xl border border-neutral-50 text-white shadow duration-500 hover:text-black hover:bg-neutral-50" >
                        Login
                    </Link>
                    <Link to={'/user/register'} className="p-2 rounded-xl border border-neutral-50 bg-neutral-50 shadow duration-500 hover:opacity-75" >
                        Register
                    </Link>
                </div>
                <span>Find so many products</span>
                <div className="scroll my-8">
                    <div className="flex gap-4 scroll">
                        <div className="scrollImages flex gap-4">

                            {/* <div className="sideScroll"></div> */}
                            {product?.map((a) => {
                                return (
                                    <img src={a.image} alt="" className="landingImage bg-neutral-50 p-2 opacity-70 rounded-2xl" />
                                )
                            })}
                            {/* <div className="sideScroll"></div> */}

                        </div>
                    </div>
                </div>
            </main>

        </div>
    )
}

export default Landing