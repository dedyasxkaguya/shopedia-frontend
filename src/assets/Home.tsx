import  { useState, useEffect } from 'react'
import axios from 'axios'
// import image from '../../public/pm.jpg'
import { Link, useParams } from 'react-router-dom'
const Home = () => {
    const { id } = useParams()
    interface Product {
        // res: string[]
        title: string
        id: number
        price: number
        category: string
        image: string
        rating_count: string
        rating_rate: string
    }
    interface User {
        name: string
        id: number
    }
    const [products, setData] = useState<Product[]>([])
    const [user, setUser] = useState<User>()
    useEffect(() => {
        axios.get<Product[]>("http://127.0.0.1:8000/api/products")
            .then(data => {
                setData(data.data)
            })
        axios.get(`http://127.0.0.1:8000/api/user/${id}`)
            .then(data => {
                const fetched = data.data
                setUser(fetched)
            })
    }, [])
    return (
        <div className='p-4'>
            <h1 className='font-semibold'>Hello {id} {user?.name}</h1>
            <Link to={'/user/login'}>Try login</Link>
            <Link to={'/user/register'}>Try Register</Link>
            <Link to={`/user/cart/${id}`}>Your cart</Link>
            <div
                className=
                "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {products.map((p) => {
                    // const cartLink : string = 'http://127.0.0.1:8000/api/cart/add'
                    // const productTitle:string = `product${p.id}`
                    let imageElem = p.image;
                    const link: string = `/product/${p.id}`
                    const data = {
                        name: p.title,
                        user_id: id,
                        price: p.price,
                        category: p.category,
                        image : imageElem
                    }
                    if(p.category=='local'){
                        imageElem = `http://127.0.0.1:8000/images/${imageElem}`
                    }
                    const handleAdd = () => {
                        axios.post("http://127.0.0.1:8000/api/cart/add", data)
                            .then(data => console.log(data.data))
                    }
                    return (
                        <div className="shadow-lg p-2 rounded-2xl border-2 flex flex-col justify-between gap-1" key={p.id}>
                            <img src={imageElem} alt="" className=
                                'product-image bg-neutral-50   rounded-xl'
                            />
                            <div className="">
                                <span>
                                    {p.rating_rate}
                                    <i className="
                                    bi bi-star-fill  text-xs text-yellow-400"></i>
                                </span>
                                <span>({p.rating_count})</span>
                                <span>{p.category}</span>
                            </div>
                            <p className='text-sm truncate'>{p.title}</p>
                            {/* <p>Only ${p.price}</p> */}
                            <div className="flex gap-2">
                                <Link to={link}
                                    className='p-2 text-xs bg-neutral-800 text-neutral-50 
                                    border-1 border-neutral-800 
                                    rounded-lg'>
                                    Detail</Link>
                                <button
                                    onClick={() => handleAdd()}
                                    className='p-2 text-xs bg-neutral-50 text-neutral-800 border-1 border-neutral-800 rounded-lg box-border duration-400 hover:bg-neutral-800 hover:text-neutral-50'>
                                    {/* Checkout */}
                                    $ {p.price}
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Home