const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
    res.send("hello world");
});


// json 형태로 보내기

app.get('/dog', (req, res) => {
    res.json({'sound': '멍멍'});
});

app.get('/sound/:name', (req, res) => {
    const { name } = req.params;

    if (name == 'dog') {
        res.json({'sound': '멍멍'});
    } else if (name == 'cat') {
        res.json({'sound': '냐옹'});
    } else if (name == 'pig') {
        res.json({'sound': '꿀꿀'});
    } else {
        res.json({'sound': '알 수 없음'});
    };

    console.log(name);

    res.json({'sound': '냐옹'});
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});


// params

app.get('/user/:id', (req, res) => {
    const p = req.params;
    console.log(p);

    res.send({'userId from params' : p.id});
});


// query - /users/원하는아이디/?q= ~ (key, value 구조)

app.get('/users/:id', (req, res) => {
    const q = req.query;
    console.log(q);

    res.send({'userId from query': q.id});
});