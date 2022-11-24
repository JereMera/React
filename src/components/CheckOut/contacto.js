import React, { useState } from 'react';

const Contact = props => {
    const handleSubmit = event => {
        const form = event.target
        const data = new FormData(form)

        //console.log('nombre', data.get('nombre'))
        //console.log('email', data.get('email')) 
        event.preventDefault();

        props.onContact(data.get('nombre'), data.get('email'), data.get('telefono'))
    }
    return <form onSubmit={handleSubmit}>
        <label>Name:<input type="text" name="nombre" /></label>
        <label>Email:<input type="text" name="email" /></label>
        <label>telefono:<input type="text" name="telefono" /></label>

        <input type="submit" value="Submit" />
    </form>
}

export default Contact;
