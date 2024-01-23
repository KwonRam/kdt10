const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const PORT = process.env.PORT || 4000;

const api = require('./routes/index');
app.use('/api', api);

app.listen(PORT, () => {
  console.log(`Server On : http://localhost:${PORT}/`);
});
