const express = require('express');
const axios = require('axios');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT|| 3001;
app.get('/services', async (req, res) => {
    try {
        const API_KEY = process.env.API_RENDER_KEY; 
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
// app.get('/services', async (req, res) => {
//     try {
//       const apiKey = process.env.API_RENDER_KEY;
//       if (!apiKey) {
//         throw new Error('RENDER_API_KEY is missing');
//       }
  
//       const response = await axios.get('https://api.render.com/v1/services', {
//         headers: {
//           Authorization: `Bearer ${apiKey}`,
//         },
//       });
  
//       res.json(response.data);
//     } catch (error) {
//       console.error('Error fetching data from Render API:', error.response?.status || error.message);
//       res.status(error.response?.status || 500).json({
//         message: 'Error fetching data',
//         error: error.message,
//         details: error.response?.data,
//       });
//     }
//   });
  
//   const PORT = process.env.PORT || 3001;
//   app.listen(PORT, () => {
//     console.log(`✅ Server running at http://localhost:${PORT}`);
//   });