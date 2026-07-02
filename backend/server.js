// backend/server.js (Node.js/Express)
const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

app.post('/api/try-on', async (req, res) => {
    const { userPhoto, clothPhoto } = req.body;

    try {
        // Request to AI Virtual Try-On API
        const response = await axios.post('https://api.virtual-tryon.ai/v1/generate', {
            person_image: userPhoto,
            garment_image: clothPhoto,
            api_key: 'YOUR_SECRET_KEY'
        });

        // Send successful response to client
        res.json(response.data);

    } catch (error) {
        // Error handling
        console.error("API Error:", error.message);
        res.status(500).json({ error: "Something went wrong with the Try-On API" });
    }
});

// Port configuration for Render or local environment
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});