const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const PORT = process.env.PORT || 4000;

app.get('/api/host', (req, res) => {
  res.send({ host: 'adfasfd' });
});

app.listen(PORT, () => {
  console.log(`Server On : http://localhost:${PORT}/`);
});
