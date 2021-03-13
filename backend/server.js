const express = require('express');
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const sensor = require('./routes');

mongoose
  .connect('mongodb+srv://paranjothi:Paran@1998@cluster0.n2a18.gcp.mongodb.net/virtualtraining?retryWrites=true&w=majority',{
    useNewUrlParser: true, useUnifiedTopology: true
})  .then((re) => console.log("DB connected", re))
.catch((err) => {});

app.use(bodyParser.json());
app.use("/api", sensor);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
