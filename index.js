
const express = require('express');

const config = require("./config.json");
const SERVER_PORT = config.serverPort;

const app = express();

app.use(express.static('public'));
app.get('/get-pdf-list', (req, res) =>{
    res.json({
        data: [
            {
                fileName: 'this is the filename',
                url: ''
            }
        ]
    })
});

//Route for image upload



/*********************
 * HTTP SERVER Open *
 ********************/

app.listen(SERVER_PORT, () => console.log(`SERVER listening on port ${SERVER_PORT}`));
