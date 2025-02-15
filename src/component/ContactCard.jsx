import React from 'react'

const ContactCard = (props) => {
    return (
        <div className='box-cart'>
            <h3>{props.name}</h3>
            <img src={props.img} className='image'/>
            <p>{props.img}</p>
            <p>{props.tel}</p>
            <p>{props.email}</p>
        </div>
    )
}

export default ContactCard
