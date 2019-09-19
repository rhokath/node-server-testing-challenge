const express = require('express');

const People = require('../people/peopleModel.js');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.status(200).json({ api: 'up' });
});

server.get('/people', (req, res) => {
  People.getAll()
    .then(people => {
      res.status(200).json(rows);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});
server.post('/', (req, res) =>{
  const person = req.body
  People.insert(person)
    .then(person => {
      res.status(201).json(person)
    })
    .catch(error => {
      res.status(500).json(error)
    })
})
server.delete('/:id', (req, res) => {
  const id = req.params.id;
  People.remove(id)
    .then(person => {
      res.status(200).json(person)
    })
    .catch(error => {
      res.status(500).json(error)
    })
})

module.exports = server;