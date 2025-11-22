import axios from 'axios'
import  { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Cart = () => {
    const { id } = useParams()
    interface Product {
        name: string
        price: number,
        quantities: number
        category: string
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
    },[])
    return (
        <div>Cart for user with id {id}
            {products.map((p) => {
                return(
                    <p>{p.name} x{p.quantities} | {p.category}</p>
                )
            })}
        </div>
    )
}

export default Cart