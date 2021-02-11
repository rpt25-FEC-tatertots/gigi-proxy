const express = require('express');
const cors = require('cors'); 
const axios = require('axios');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let port = 5000;

app.use('/:productID', express.static(__dirname + '/../public/dist'));


app.get('/photos', (req, res) => {
  let productId = req.params.productID;
  axios.get(`http://localhost:5001/photos`)
    .then(response => {
      res.send(response.data)
    })
    .catch(err => console.log('👎🏽 error on proxy server', err))
});

app.get('/photos/:productID', (req, res) => {
  let productId = req.params.productID;
  axios.get(`http://localhost:5001/photos/${productId}`)
    .then(response => {
      res.send(response.data)
    })
    .catch(err => console.log('👎🏽 error on proxy server', err))
});

app.get('/locations', (req, res) => {
  let productId = req.params.productID;
  axios.get(`http://localhost:5002/locations`)
    .then(response => {
      res.send(response.data)
    })
    .catch(err => console.log('👎🏽 error on proxy server', err))
});

app.get('/locations/:productID', (req, res) => {
  let productId = req.params.productID;
  axios.get(`http://localhost:5002/locations/${productId}`)
    .then(response => {
      res.send(response.data)
    })
    .catch(err => console.log('👎🏽 error on proxy server', err))
});

app.get('/materials', (req, res) => {
  let productId = req.params.productID;
  axios.get(`http://localhost:5002/materials`)
    .then(response => {
      res.send(response.data)
    })
    .catch(err => console.log('👎🏽 error on proxy server', err))
});

app.get('/materials/:productID', (req, res) => {
  let productId = req.params.productID;
  axios.get(`http://localhost:5002/materials/${productId}`)
    .then(response => {
      res.send(response.data)
    })
    .catch(err => console.log('👎🏽 error on proxy server', err))
});

app.get('/title', (req, res) => {
  let productId = req.params.productID;
  axios.get(`http://localhost:5003/title`)
    .then(response => {
      res.send(response.data)
    })
    .catch(err => console.log('👎🏽 error on proxy server', err))
});

app.get('/title/:productID', (req, res) => {
  let productId = req.params.productID;
  axios.get(`http://localhost:5003/title/${productId}`)
    .then(response => {
      res.send(response.data)
    })
    .catch(err => console.log('👎🏽 error on proxy server', err))
});

app.get('/reviews/:productID', (req, res) => {
  let productId = req.params.productID;
  axios.get(`http://localhost:5003/reviews/${productId}`)
    .then(response => {
      res.send(response.data)
    })
    .catch(err => console.log('👎🏽 error on proxy server', err))
});

app.get('/similar', (req, res) => {
  let productId = req.params.productID;
  axios.get(`http://localhost:5008/similar`)
    .then(response => {
      res.send(response.data)
    })
    .catch(err => console.log('👎🏽 error on proxy server', err))
});

app.get('/similar/:productID', (req, res) => {
  let productId = req.params.productID;
  axios.get(`http://localhost:5008/similar/${productId}`)
    .then(response => {
      res.send(response.data)
    })
    .catch(err => console.log('👎🏽 error on proxy server', err))
});

app.listen(port, function () {
    console.log(`listening on port ${port}`);
});