const express = require('express');
const app = express();
const port = 3000;

//endpoint
app.get('/bilangan1/:bil1/bilangan2/:bil2', (req,res) => {
    res.send(req.params)
});

app.post('/:username/:fullname', (req,res) => {
    res.send(req.params);
    //konek db
    //simpan data
});

app.listen(port, () => {
    console.log('cli-nodesjs-api listening at http://localhost:${port}')
});