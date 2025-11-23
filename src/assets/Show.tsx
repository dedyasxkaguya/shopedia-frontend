import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Show = () => {
    interface Product {
        title: string
        price: number
        description: string
        image: string
        rating_rate: number
        rating_count: number
        category: string
    }
    const [product, setProduct] = useState<Product>()
    const { id } = useParams()
    let imageELem = ''
    useEffect(() => {
        axios.get<Product>(`http://127.0.0.1:8000/api/product/${id}`)
            .then(data => {
                console.log(data.data)
                setProduct(data.data)
                console.log(product)
            })
        }, [])
        if(product?.image){
            if(product.category=='local'){
                imageELem = `http://127.0.0.1:8000/images/${product.image}`
            }else{

                imageELem = product.image
            }
            console.log(imageELem)
        }else{
            console.log(product?.image)
        }
    return (
        <div>
            <img src={imageELem} alt="" />
            <h1>    Show id = {id} </h1>
            {product?.title} <br />
            {product?.price} $<br />
            {product?.description} <br />
            {/* <img src={product?.image} alt="" /><br /> */}
            {product?.rating_rate} / {product?.rating_count}

        </div>
    )
}

export default Show