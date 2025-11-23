import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

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
        <div>Cart for user with id {id}
            {products.map((p) => {
                let imageElem = p.image
                if(p.category=='local'){
                    imageElem = `http://127.0.0.1:8000/images/${p.image}`
                }
                return (
                    <div className="p-2 rounded-xl border-1 m-4 flex gap-4">
                        <img src={imageElem} alt="" className='w-50'/>
                        <div className="">
                            <p>{p.name} x{p.quantities} | {p.category}</p>
                            <p>price {p.price} x{p.quantities} </p>
                            <p>${(p.price) * (p.quantities)}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Cart