const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get("/weather", async (req, res) => {
    const city = req.query.city;
    if (!city) {
        return res.status(400).json({ error: "City parameter is required" });
    }

    try {
        const apiKey = process.env.API_KEY;
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );

        const { temp, humidity } = response.data.main;
        const { speed } = response.data.wind;
        const { main: condition, icon } = response.data.weather[0];

        res.json({
            temperature: temp,
            humidity,
            windSpeed: speed,
            condition,
            icon: `https://openweathermap.org/img/wn/${icon}@2x.png` // ✅ fixed line
        });
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch weather data" });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
