const express = require('express');
const app = express ();
const bodyPraser = require('body-parser');
app.get('/', (req, res) => {
    res.send('Hello World');
  })

app.use(bodyPraser.json());
app.use(bodyPraser.urlencoded({extended:false}))
  
app.post('/person', (req, res) => {
   let newPerson = {
    name: req.query.name,
    age: req.query.age,
    gender: req.query.gender
   }
    res.json(newPerson.age+5)
  })

  function start(port) {
    app.listen(3000, () => console.log(`The server is up`));
  }

  module.exports = {
    app: app,
    start: start
  }