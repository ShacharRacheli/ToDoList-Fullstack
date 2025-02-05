const express = require('express');
const axios = require('axios');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT|| 3001;

// הכנס את ה-API Key שלך כאן

app.get('/services', async (req, res) => {
    try {
        const API_KEY = process.env.API_RENDER_KEY; // החלף ב-API Key שלך
        const response = await axios.get('https://api.render.com/v1/services', {
            headers: {
                'Authorization': `Bearer ${API_KEY}`
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching data from Render API:', error);
        res.status(500).json({ message: 'Error fetching data' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
