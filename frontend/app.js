const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const port = 3000;
const backendServiceUrl = 'http://backend:5000';

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', async (req, res) => {
    try {
        const response = await axios.get(backendServiceUrl);
        const data = response.data;
        res.send(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Frontend Page</title>
                <style>
                    body {
                        font-family: 'Arial', sans-serif;
                        margin: 0;
                        padding: 0;
                        background: #f0f4f8;
                        color: #333;
                    }
                    header {
                        background: #4CAF50;
                        color: white;
                        padding: 10px 0;
                        text-align: center;
                    }
                    .container {
                        max-width: 800px;
                        margin: 20px auto;
                        padding: 20px;
                        background: white;
                        border-radius: 8px;
                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                        text-align: center;
                    }
                    h1 {
                        margin-top: 0;
                        font-size: 2em;
                    }
                    p {
                        font-size: 1.2em;
                        margin: 10px 0;
                    }
                    ul {
                        list-style: none;
                        padding: 0;
                        margin: 0;
                    }
                    li {
                        font-size: 1.2em;
                        margin: 5px 0;
                    }
                    img {
                        max-width: 100%;
                        height: auto;
                        border-radius: 8px;
                        margin-top: 20px;
                    }
                </style>
            </head>
            <body>
                <header>
                    <h1>Welcome to the Frontend Page</h1>
                </header>
                <div class="container">
                    <h2>Message from Backend:</h2>
                    <p>${data.message}</p>
                    <h3>Additional Info:</h3>
                    <ul>
                        <li><strong>Data1:</strong> ${data.data1 || 'N/A'}</li>
                        <li><strong>Data2:</strong> ${data.data2 || 'N/A'}</li>
                        <li><strong>Data3:</strong> ${data.data3 || 'N/A'}</li>
                        <li><strong>Data4:</strong> ${data.data4 || 'N/A'}</li>
                        <li><strong>Data5:</strong> ${data.data5 || 'N/A'}</li>
                    </ul>
                    <img src="/images/image1.jpg" alt="Beautiful Landscape">
                </div>
            </body>
            </html>
        `);
    } catch (error) {
        res.send(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Error</title>
                <style>
                    body {
                        font-family: 'Arial', sans-serif;
                        margin: 0;
                        padding: 0;
                        background: #f0f4f8;
                        color: #333;
                    }
                    header {
                        background: #f44336;
                        color: white;
                        padding: 10px 0;
                        text-align: center;
                    }
                    .container {
                        max-width: 800px;
                        margin: 20px auto;
                        padding: 20px;
                        background: white;
                        border-radius: 8px;
                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                        text-align: center;
                    }
                    h1 {
                        margin-top: 0;
                        font-size: 2em;
                    }
                    p {
                        font-size: 1.2em;
                        margin: 10px 0;
                    }
                </style>
            </head>
            <body>
                <header>
                    <h1>Error</h1>
                </header>
                <div class="container">
                    <p><strong>Error Message:</strong> ${error.message}</p>
                </div>
            </body>
            </html>
        `);
    }
});

app.listen(port, () => {
    console.log(`Frontend is running on http://localhost:${port}`);
});
