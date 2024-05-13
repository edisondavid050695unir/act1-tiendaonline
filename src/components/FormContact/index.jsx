import React, { useState } from 'react';
import './FormContact.css'; // Asegúrate de crear este archivo para tus estilos

const FormContact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        // Aquí podrías añadir código para enviar los datos a un servidor
    };

    return (
        <form onSubmit={handleSubmit} className="form-contact">
            <h3>Leave Message</h3>
            <div className="input-group">
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Nombre"
                />
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Correo Electronico"
                />
            </div>
            <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Mensaje"
            />
            <button type="submit">Enviar Mensaje</button>
        </form>
    );
};

export default FormContact;
