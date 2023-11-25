const express = require('express');
const app= express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views', './views')

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.gett('/',(req, res)=> {
    res.render('index');
})

app.get('/ajax', (req, res) => {
    console.log(req.query);
    res.send(req.query);
})

app.get('/axios', (req, res)=> {
    console.log(req.query);
    res.send(req.query);
})
app.get('/fetch', (req, res) => {
    console.log(req.query);
    res.send(req.query);
})

app.post('/fetch', (req, res) => {
    console.log(req.body);
    res.send(req.body);
})


app.listen(PORT, () => {
    console.log(`server is opening ${PORT}`);
})