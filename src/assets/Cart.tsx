import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Cart = () => {
    const { id } = useParams()
    interface Product {
        name: string
        price: number
        quantities: number
        category: string
        image: string
    }
    // interface User { 
    //     name:string
    // }
    const [products, setProducts] = useState<Product[]>([])
    useEffect(() => {
        axios.get<Product[]>(`http://127.0.0.1:8000/api/cart/user/${id}`)
            .then(data => {
                const fetched = data.data
                console.log(fetched)
                setProducts(fetched)
            })
    }, [])
    return (
        <div className='flex flex-col justify-between h-[100dvh]'>
            <div className="">
                <div className="flex justify-between p-2 items-center bg-[#ffb49f]">
                    <Link to={`/home/${id}`} className='p-2 rounded-xl duration-500 hover:bg-neutral-50'>
                        <i className='bi bi-chevron-left '></i>
                        <i className="bi bi-house-fill mx-2"></i>
                    </Link>
                    {/* <span className='text-2xl font-semibold'>Dedyas</span> */}
                    <span className='text-xl font-semibold'>Cart</span>
                </div>
            {products.map((p) => {
                let imageElem = p.image
                    if (p.category == 'local') {
                    imageElem = `http://127.0.0.1:8000/images/${p.image}`
                }
                return (
                    <div className="p-2 rounded-xl borderm-4 flex gap-4">
                            <img src={imageElem} alt="" className='w-50' />
                        <div className="">
                            <p>{p.name} x{p.quantities} | {p.category}</p>
                            <p>price {p.price} x{p.quantities} </p>
                            <p>${(p.price) * (p.quantities)}</p>
                        </div>
                    </div>
                )
            })}
            </div>
            <div className="flex shadowall p-4 gap-2 items-center justify-between">
                {/* <label htmlFor="" className='font-semibold'>Select All
                    <input type="checkbox" name="" id="" className='mx-2' />
                </label> */}
                <div className="flex gap-4 items-center">
                    <span className='font-bold text-2xl'>Total</span>
                    <span>$6767</span>
                </div>
                <div className="flex gap-4 items-center">
                    <span className='font-light opacity-75'>67% Discount</span>
                    <button type="button" className='bg-[#ffb49f] p-2 text-black rounded-lg text-xl'>
                        Buy now (1)
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Cart