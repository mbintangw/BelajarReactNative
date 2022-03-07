const express = require('express');
const app = express();
const port = 3000;

//endpoint
app.get('/', (req, res) => {
    res.send(req.query);
});

app.listen(port, () => {
    console.log('cli-nodesjs-api listening at http://localhost:${port}')
});