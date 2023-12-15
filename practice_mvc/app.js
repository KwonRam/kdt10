const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//mvc 적용 라우터를 가지고오자
const indexRouter = require('./routes/index');
//미들웨어 등록

app.use('/', indexRouter);

//404처리는 맨 밑에 맨 나중에 라우트로 선언
app.get('*', (req, res)=> {
    res.render('404');
})

app.listen(PORT, () => {
    console.log(`server is opening ${PORT}`);
})


