const express = require('express');
const app = express();
const api = require('./routes/index');
const PORT = process.env.PORT || 8000;

/*const cors = require('cors');
app.use(cors());*/
/*const IndexRouter = require('./routes/index');
app.use('index', IndexRouter);*/
/*app.get('/', (req, res) => {
  res.send('Hello');
});*/
app.use('/api', api);

app.get('*', (req, res) => {
  res.render('404');
});

app.listen(PORT, () => {
  console.log(`Server run : http://localhost:${PORT}/`);
});
