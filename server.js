//dependencies
const express = require('express');
const app = express();

//set port
const port = 3000;

app.get('/', (req, res) => {
    res.send('Port established');
});

//routes

//middleware

//start the server
app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`);
});

//end the server