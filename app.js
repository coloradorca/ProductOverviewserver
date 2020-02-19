const express = require('express');
const db = require('./server/db/config.js');
//import routes
const routes = require('./server/routes/routes.js');

const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/products/list', routes.getProductList); //PARAMS: page, count
app.get('/products/:product_id', routes.getProductInformation);
app.get('/products/:product_id/styles', routes.getProductStyles);
app.get('/products/:product_id/related', routes.getRelatedProducts);

const port = 3000;

app.listen(port, () => {
  console.log('Listening on port', port);
});

module.exports = app;
