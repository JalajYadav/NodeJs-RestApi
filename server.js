const PORT = 5000;

//TODO: Setup the express server
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

//TODO: Requiring the base route
const routes = require('./routes/index.routes.js');

app.use('/', routes);

app.listen(PORT, () => {
    console.log(`CORS ENABLED Server running on port http://localhost:${PORT}/`);
})