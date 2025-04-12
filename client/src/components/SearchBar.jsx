
import React, { useState } from 'react';
import axios from 'axios';

function SearchBar({ setWeatherData }) {
    const [city, setCity] = useState('');
    const [error, setError] = useState(null);

    const handleSearch = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/weather?city=${city}`);
            setWeatherData(response.data);
            setError(null);
        } catch (err) {
            setError('City not found or network error');
            setWeatherData(null);
        }
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                value={city}
                placeholder="Enter city name"
                onChange={(e) => setCity(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
            {error && <p className="error">{error}</p>}
        </div>
    );
}

export default SearchBar;
