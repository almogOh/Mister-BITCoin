import React from 'react'
//<article style={contactStyle} className='contact-preview'>

export function ContactPreview({ contact }) {

    //const contactStyle = { backgroundImage: `url(https://robohash.org/${contact._id})` }
    const contactStyle = `https://robohash.org/${contact._id}`
    return (
        <section className="preview flex column text-center">
            <img src={contactStyle}/>
            <section className="info text-center">
                <h2>{contact.name}</h2>
                <h4>{contact.email}</h4>
                <h4>{contact.phone}</h4>
            </section>
        </section>
    )
}