//dependencies
const express = require('express');
const path = require('path');
const app = express();
//set port
const PORT = process.env.PORT || 3333;

//routes
//static folder
app.use(express.static(path.join(__dirname, 'public')));

//server listening to PORT
app.listen(PORT, () => {
    console.log(`app listening at http://localhost:${PORT}`);
});

//end the server