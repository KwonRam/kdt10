const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('/views','views');
app.set('views','./views');

//미들웨어 등록

//req.body 객체 해석가능하게 body-parser 미들웨어 등록 

app.use(express.urlencoded({extended: true}));//post 요청으로 들어오는 모든 형식의 데이터를 파싱해준다
app.use(express.json());//json 형식으로 데이타를 주고받겠다

app.get('/', (req, res) => {
    //views 폴더 내부의 index라는 ejs파일을 렌더
    res.render('practice1');
})

//Get '/login' 요청이 들어오면 임의의 메시지를 전송
//get 방식은 클라이언트에서 보낸 데이터가 req.query에 저장
/*app.get('/login', (req, res) => {
    console.log(req.query);
    //res.send('post 요청 성공!');
    res.render('result1', {title: 'Practice 1', userInfo: req.query})
})*/

app.post('/login', (req, res) => {
    console.log(req.body);
    //res.send('post 요청 성공!');
    res.render('result1', {title: 'Practice 1', userInfo: req.body})
})

//POST '/login' 요청이 들어오면 임의의 메시지를 전송
//post 방식은 클라이언트에서 보낸 데이터가 req.body에 저장
/*app.post('/login', (req, res) => {
    console.log(req.body);
    res.send('post 요청 성공!');
})*/

app.listen(PORT, function() {
    console.log(`${PORT} is opening!`);
})