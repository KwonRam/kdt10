const express = require('express');
const app= express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views', './views')

app.use(express.urlencoded({extended: true}));
app.use(express.json());

/*app.get('/',(req, res)=> {
    res.render('practice1');
})*/
app.get('/',(req, res)=> {
    res.render('practice2');
})

/*app.get('/axios', (req, res)=> {
    console.log(req.query);
    res.send(req.query);
})*/
/*
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
*/

app.post('/practice2', (req, res)=> {
    console.log(req.body);
    if(userId === req.body.userId && userPw === req.body.userPw){
        res.send({userInfo: req.body, isSuccess: true});
    }
    else{
        res.send({isSuccess: flase});
    }
        
})

app.listen(PORT, () => {
    console.log(`server is opening ${PORT}`);
})