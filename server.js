import express from 'express';
import fetch from 'node-fetch';

//const express = require('express');
//const fetch = require('node-fetch'); // for making HTTP requests

const app = express();

app.get('/getData', async (req, res) => {
    try {
        const response = await fetch('https://api.example.com/data'); // Replace with your API endpoint
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});