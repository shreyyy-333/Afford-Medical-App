import React from 'react';

function WeatherCard({ data }) {
    return (
        <div className="weather-card" style={{
            display: 'flex',
            alignItems: 'center',
            padding: '1rem',
            border: '1px solid #ccc',
            borderRadius: '8px',
            maxWidth: '600px',
            gap: '1.5rem'
        }}>
            <img src={data.icon} alt={data.condition} style={{ width: '80px', height: '80px' }} />
            <div>
                <h2>{data.condition}</h2>
                <p>Temperature: {data.temperature}°C</p>
                <p>Humidity: {data.humidity}%</p>
                <p>Wind Speed: {data.windSpeed} m/s</p>
            </div>
        </div>
    );
}

export default WeatherCard;
