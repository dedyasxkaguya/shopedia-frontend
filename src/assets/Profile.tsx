import axios from 'axios'
import React, {  useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Profile = () => {
    interface User {
        id : number
        name: string
        image: string
        email: string
    }
    const [user, setUser] = useState<User>()
    const [image, setImage] = useState("")
    const [file, setFile] = useState<File>()
    const { id } = useParams()
    useEffect(() => {
        axios.get<User>(`http://127.0.0.1:8000/api/user/${id}`)
            .then(data => {
                const fetched = data.data
                const image = `http://127.0.0.1:8000/images/${fetched.image}`
                console.log(fetched.image)
                setUser(fetched)
                console.table(user)
                setImage(image)
            })
    }, [])
    const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFile(e.target.files[0])
        }
    }
    const handleSend = () => {
        const formdata = new FormData();
        const userELem = document.getElementById("user_id") as HTMLInputElement
        if(userELem && file){
            formdata.append('id',userELem.value)
            formdata.append('image',file)
            console.log(file)
            axios.post(`http://127.0.0.1:8000/api/user/edit/${user?.id}`,formdata)
            .then(data=>{
                const fetched = data.data
                console.log(fetched)
            })
        }else{
            console.log('isi dulu tsuka')
        }
    }
    // const imageLink = `http://127.0.0.1:8000/images/profile_images/${user?.image}`
    return (
        <div>Profile with id {id}
            <div className="p-4">
                <img src={image} alt="" className='rounded-full w-[24dvw]' />
                <input type="text" name="" id="user_id" value={user?.id} />
                <input type="file" name="" id="" accept='image/*' className='shadow p-2 rounded-xl' onChange={(e) => handleImage(e)} />
                {/* <img src={previewUrl} alt="" /> */}
                <button type='button' onClick={()=>handleSend()} className='p-4 shadow'>blyaaat</button>
            </div>
        </div>
    )
}

export default Profile