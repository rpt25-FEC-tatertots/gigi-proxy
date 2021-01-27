const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let port = 6000;

app.listen(port, function () {
    console.log(`listening on port ${port}`);
});