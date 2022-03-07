const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/images', express.static('images'));


//endpoint
app.post('/', (req, res) => {
    res.json(req.body);
});

app.listen(port, () => {
    console.log('cli-nodesjs-api listening at http://localhost:${port}')
});