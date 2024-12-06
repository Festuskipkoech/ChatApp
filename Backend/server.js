const express = require('express');
const cors = require('cors');
const axios = require('axios');

// require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
    const { username } = req.body;

    try {
        const response = await axios.put(
            'https://api.chatengine.io/users/',
            { username: username, secret: username, first_name: username },
            { headers: { "private-key":"8c63dbce-80a7-455a-890b-9368d16e1dcb"} }
        );
        return res.status(response.status).json(response.data);
    } catch (error) {
        return res.status(error.response?.status || 500).json(error.response?.data || { error: "Something went wrong" });
    }
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
