// import React from 'react'

interface InputProps {
    placeholder: string
    type: string
    id: string
}

const Inputtext = (props: InputProps) => {
    return (
        <input type={props.type} id={props.id} placeholder={props?.placeholder} className='p-2 border border-neutral-800 rounded-lg w-[24dvw] cursor-pointer' required/>

    )
}

export default Inputtext