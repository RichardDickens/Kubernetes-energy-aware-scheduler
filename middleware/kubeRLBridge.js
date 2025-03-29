const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 8080;

app.get("/score", async (req, res) => {
    const scoreNodeBody = req.query.node;
    if(!scoreNodeBody) res.json({
        'score': 0,
        'node': '',
        'statusCode': 400
    })
    
    let energyUsage = Math.floor(Math.random() * 100); 
    let score = 100 - energyUsage;

    console.log(`Node: ${node}, Energy Usage: ${energyUsage}, Score: ${score}`);
    res.json({
        'score': score,
        'node': node,
        'statusCode': 200
    });
});

// Start the server
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Middleware is running on http://0.0.0.0:${PORT}`);
});
