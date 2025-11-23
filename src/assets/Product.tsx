// import React from 'react'

import axios from "axios"

const Product = () => {
    const handleStore = () => {
        const nameELem = document.getElementById("name") as HTMLInputElement
        const imageELem = document.getElementById("image") as HTMLInputElement
        const priceELem = document.getElementById("price") as HTMLInputElement
        const descriptionELem = document.getElementById("description") as HTMLInputElement

        const formData = new FormData();

        formData.append('title', nameELem.value);
        formData.append('price', priceELem.value);
        formData.append('description', descriptionELem.value);

        if (imageELem.files) {
            formData.append('image', imageELem.files[0])
        } else {
            console.warn("kosong")
        }

        console.table(formData)

        axios.post("http://127.0.0.1:8000/api/product/add", formData)
            .then(data => {
                const fetched = data.data
                console.log(fetched)
            })

    }
    return (
        <div>Product
            {/* <img src="http://127.0.0.1:8000/images/post-images/M8PjB3PPMoMnHqUfWKs3X1C3t36hV9XORKU0RLep.jpg" alt="" /> */}
            <form action="" encType="multipart/form-data">
                <input className=
                    "border-1 p-2"
                    type="text" name="title" id="name" placeholder="name"/>
                <input className=
                    "border-1 p-2"
                    type="file" name="image" id="image" accept="image/*" />
                <input type="number" name="price" id="price" placeholder="price"
                    className="border-1 p-2" />
                <input type="text" name="description" id="description" placeholder="description"
                    className="border-1 p-2" />
                <button type="button" onClick={() => handleStore()}
                    className="border-1 p-2 bg-neutral-800 text-neutral-50 border-box">Send</button>
            </form>
        </div>
    )
}

export default Product