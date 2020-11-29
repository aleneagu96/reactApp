import React from 'react';
import PropTypes from 'prop-types';
import "./ContactCard.css";

function ContactCard({
    firstName,
    lastName,
    age,
    imageUrl,
    email
}) 
{
    return <div className="contact-card">
        <img src={imageUrl} />
        <div className="contact-card-text" >
            <span>{age}</span>
            <span>{firstName}</span>
            <span>{lastName}</span>
            <br></br>
            <span>{email}</span>
        </div>
        
    </div>
}

ContactCard.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
}

export default ContactCard;