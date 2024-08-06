const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;
const backendServiceUrl = 'http://backend:5000';

app.get('/', async (req, res) => {
    try {
        const response = await axios.get(backendServiceUrl);
        res.send(`Frontend received: ${response.data.message}`);
    } catch (error) {
        res.send(`Error: ${error.message}`);
    }
});

app.listen(port, () => {
    console.log(`Frontend is running on http://localhost:${port}`);
});
