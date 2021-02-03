const express = require('express');
const axios = require('axios');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let port = 5000;

app.use(express.static(__dirname + '/../public/dist'));

app.get('/photos', (req, res) => {
  // const product_id = window.location.pathname;
  // console.log(product_id);
  // const product_id = req.params.productID;
  // console.log('🚙 this is line 17', product_id)
  let productId = req.query.product_id;
  axios.get(`http://localhost:5001/photos?product_id=${productId}`)
    .then(response => {
      res.send(response.data)
    })
    .catch(err => console.log('👎🏽 error on proxy server', err))
});

app.listen(port, function () {
    console.log(`listening on port ${port}`);
});