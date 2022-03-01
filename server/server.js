const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const axios = require('axios');
require('dotenv').config();

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for axios requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('build'));

app.get('/giphy', (req, res) => {
    axios.get(`http://api.giphy.com/v1/gifs/trending?api_key=${process.env.GIPHY_API_KEY}&rating=pg`)
        .then(response => res.send(response.data))
        .catch(error => {
            console.log('Error is', error);
            res.sendStatus(500);
        });
})

/** ---------- EXPRESS ROUTES ---------- **/

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});