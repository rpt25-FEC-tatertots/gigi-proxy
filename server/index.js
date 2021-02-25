const express = require('express');
const axios = require('axios');
const compression = require('compression');

const app = express();
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let port = 5000;

app.use('/:productID', express.static(__dirname + '/../public/dist'));

app.get('/product/:productID', (req, res) => {
  let productId = req.params.productID;
  axios.get(`http://54.241.34.87:5004/product/${productId}`)
    .then(response => {
      res.send(response.data)
    })
    .catch(err => console.log('👎🏽 error on proxy server', err))
});

app.get('/images/thumbnailImages/:productID', (req, res) => {
  let productId = req.params.productID;
  axios.get(`http://54.241.34.87:5003/images/thumbnailImages/${productId}`)
    .then((response) => {
      res.send(response.data)
    })
    .catch(err => console.log('👎🏽 error on proxy server', err))
});

app.get('/photos', (req, res) => {
  axios.get(`http://3.136.32.206:5001/photos`)
    .then(response => {
      res.send(response.data)
    })
    .catch(err => console.log('👎🏽 error on proxy server', err))
});

app.get('/photos/:productID', (req, res) => {
  let productId = req.params.productID;
  axios.get(`http://3.136.32.206:5001/photos/${productId}`)
    .then(response => {
      res.send(response.data)
    })
    .catch(err => console.log('👎🏽 error on proxy server', err))
});

app.get('/locations', (req, res) => {
  axios.get(`http://3.136.32.206:5002/locations`)
    .then(response => {
      res.send(response.data)
    })
    .catch(err => console.log('👎🏽 error on proxy server', err))
});

app.get('/locations/:productID', (req, res) => {
  let productId = req.params.productID;
  axios.get(`http://3.136.32.206:5002/locations/${productId}`)
    .then(response => {
      res.send(response.data)
    })
    .catch(err => console.log('👎🏽 error on proxy server', err))
});

app.get('/materials', (req, res) => {
  let productId = req.params.productID;
  axios.get(`http://3.136.32.206:5002/materials`)
    .then(response => {
      res.send(response.data)
    })
    .catch(err => console.log('👎🏽 error on proxy server', err))
});

app.get('/materials/:productID', (req, res) => {
  let productId = req.params.productID;
  axios.get(`http://3.136.32.206:5002/materials/${productId}`)
    .then(response => {
      res.send(response.data)
    })
    .catch(err => console.log('👎🏽 error on proxy server', err))
});

app.get('/images/mainImages', (req, res) => {
  axios.get(`http://54.241.34.87:5003/images/mainImages`)
    .then((response) => {
      res.send(response.data)
    })
    .catch(err => console.log('👎🏽 error on proxy server', err))
});

app.get('/images/mainImages/:productID', (req, res) => {
  let productId = req.params.productID;
  axios.get(`http://54.241.34.87:5003/images/mainImages/${productId}`)
    .then((response) => {
      res.send(response.data)
    })
    .catch(err => console.log('👎🏽 error on proxy server', err))
});

app.get('/inventory/:productID', (req, res) => {
  let productId = req.params.productID;
  axios.get(`http://54.241.34.87:5004/inventory/${productId}`)
    .then((response) => {
      res.send(response.data)
    })
    .catch(err => console.log('👎🏽 error on proxy server', err))
})

app.get('/title', (req, res) => {
  axios.get(`http://54.241.34.87:5005/title`)
    .then(response => {
      res.send(response.data)
    })
    .catch(err => console.log('👎🏽 error on proxy server', err))
});

app.get('/title/:productID', (req, res) => {
  let productId = req.params.productID;
  axios.get(`http://54.241.34.87:5005/title/${productId}`)
    .then(response => {
      res.send(response.data)
    })
    .catch(err => console.log('👎🏽 error on proxy server', err))
});

app.get('/reviews/:productID', (req, res) => {
  let productId = req.params.productID;
  axios.get(`http://54.241.34.87:5005/reviews/${productId}`)
    .then((response) => {
      res.send(response.data)
    })
    .catch(err => console.log('👎🏽 error on proxy server', err))
});

app.get('/overview/:productID', (req, res) => {
  let productId = req.params.productID;
  axios.get(`http://3.16.235.27:5007/overview/${productId}`)
    .then((response) => {
      res.send(response.data)
    })
    .catch(err => console.log('👎🏽 error on proxy server', err))
})

app.get('/similar', (req, res) => {
  axios.get(`http://3.16.235.27:5008/similar`)
    .then(response => {
      res.send(response.data)
    })
    .catch(err => console.log('👎🏽 error on proxy server', err))
});

app.get('/similar/:productID', (req, res) => {
  let productId = req.params.productID;
  axios.get(`http://3.16.235.27:5008/similar/${productId}`)
    .then(response => {
      res.send(response.data)
    })
    .catch(err => console.log('👎🏽 error on proxy server', err))
});


app.listen(port, function () {
  console.log(`listening on port ${port}`);
});