import React from "react";
import './ContactCard.css'

export function ContactCard({name, mobile}){
    return(
        <div className="contact-card">
            <h1>Name: {name}</h1>
            <span>Mobile No: {mobile}</span>
        </div>
    )
}

export default ContactCard