import React, { useState } from 'react';
import './Searcher.css';

const Searcher = ({ onSearch }) => {
    const [input, setInput] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(input);
    };

    return (
        <form className="searcher__bar" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="¿Qué necesitas?"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="searcher__input"
            />
            <button type="submit" className="searcher__button">BUSCAR</button>
        </form>
    );
};

export default Searcher;
