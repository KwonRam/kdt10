const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views', './views');
app.use('/static', express.static(__dirname + '/static'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// [라우터 분리]

const bookShelfRouter = require('./routes/bookMain');
app.use('/bookShelf', bookShelfRouter);

// [404 error]
// 맨 마지막에 라우트로 선언: 위에다 하게 되면 나머지 코드 무시되기 때문에
app.get('*', (req, res) => {
    res.render('404');
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})