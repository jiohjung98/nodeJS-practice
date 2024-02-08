const express = require('express');
const app = express();

app.listen(8080, function(){
    console.log('listening on 8080 port');
});

app.get('/pet', (req, res) => {
    res.send('펫용품');
});

app.get('/beauty', (req, res) => {
    res.sendFile(__dirname + '/index.html')
});
