const express = require('express');
const app = express();
const port = 3000;

//endpoint
app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.post('/', (req, res) => {
    res.send('Ini dari endpoint HTTP POST')
});

app.put('/', (req, res) => {
    res.send('Ini dari endpoint HTTP PUT!')
});

app.delete('/', (req, res) => {
    res.send('Ini dari endpoint HTTP DELETE!')
});

app.get('/express', (req, res) => {
    res.send('Hello Express JS!')
});


app.listen(port, () => {
    console.log('cli-nodesjs-api listening at http://localhost:${port}')
});