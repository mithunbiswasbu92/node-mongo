const express = require('express');


const app = express();

app.get('/', (req, res) => {
    res.send('Now this is working fine');
})

app.listen(1500, () => console.log('listening to port 1500')); 