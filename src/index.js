require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./routers/router');
const { use } = require('./routers/router');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use('/', router);
app.listen(5555, () => {
  console.log('Server running on port 5555');
});
