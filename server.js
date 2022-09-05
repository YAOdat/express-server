const express = require('express');
const app = express ();
const bodyPraser = require('body-parser');
const people = []
const cors = require( "cors" );

app.get('/', (req, res) => {
    res.send('Hello World');
    res.status(200);

  })

app.use(cors());
app.use(bodyPraser.json());
app.use(bodyPraser.urlencoded({extended:false}))
  
app.post('/person', (req, res) => {
   let newPerson = {
    name: req.body.name,
    age: req.body.age,
    gender: req.body.gender
   }
   
    people.push(newPerson)
    newPerson.age = JSON.parse(newPerson.age) +5;
    console.log(newPerson)
    res.send(newPerson)
    res.status(200)
  })

  function start() {
    app.listen(process.env.PORT, () => console.log(`The server is up`, process.env.PORT));
  }

  module.exports = {
    app: app,
    start: start
  }