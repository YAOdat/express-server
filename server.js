const express = require('express');
const app = express ();
const bodyPraser = require('body-parser');
const people = []


app.get('/', (req, res) => {
    res.send('Hello World');
  })

app.use(bodyPraser.json());
app.use(bodyPraser.urlencoded({extended:false}))
  
app.post('/person', (req, res) => {
   let newPerson = {
    name: req.body.name,
    age: req.body.age+5,
    gender: req.body.gender
   }
    people.push(newPerson)
    res.json(people)
  })

  function start(port) {
    app.listen(3000, () => console.log(`The server is up`));
  }

  module.exports = {
    app: app,
    start: start
  }