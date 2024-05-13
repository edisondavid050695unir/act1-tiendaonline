import React, { useState } from 'react';
import './Searcher.css'; // Asegúrate de tener este archivo CSS en la misma carpeta del componente

const Searcher = ({ onSearch }) => {
    const [input, setInput] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(input);
    };

    return (
        <form className="search-bar" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="¿Qué necesitas?"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="search-input"
            />
            <button type="submit" className="search-button">BUSCAR</button>
        </form>
    );
};

export default Searcher;
