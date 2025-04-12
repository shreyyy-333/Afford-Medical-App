
import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import './App.css';

function App() {
    const [weatherData, setWeatherData] = useState(null);

    return (
        <div className="app">
            <SearchBar setWeatherData={setWeatherData} />
            {weatherData && <WeatherCard data={weatherData} />}
        </div>
    );
}

export default App;
