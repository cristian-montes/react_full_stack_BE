const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
    res.send('WHAT IS UP VATOS');
});


app.listen(port, ()=> {
    console.log(`react-full-stack app listening on port ${port}!`);
})