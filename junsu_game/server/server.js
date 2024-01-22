// express 모듈 호출
const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.static(path.join(__dirname, '/junsu_game/src')));

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

const IndexRouter = require('./routes/index');
app.use('index', IndexRouter);

app.get('*', (req, res) => {
  res.render('404');
});

app.listen(PORT, () => {
  console.log(`Server run : http://localhost:${PORT}/`);
});
