const axios = require('axios');
const planets = require('../bd/db')

module.exports = function (app) {

  //GET
  app.get('/planet', async (req, res, next) => {
    res.send(planets)
  });

  //GET:ID
  app.get('/planet/:id', async (req, res, next) => {
    const parmId = req.params.id;

    planets.map((planet) => {
      if (planet.id == parmId) {
        res.send(planet)
      }
    })
  });

  //DELETE
  // app.delete('/planet/:id', async (req, res) => {

  // });


  app.options('/planet', (req, res) => {
    res.end();
  });

  //POST
  // app.post('/planet', async (req, res, next) => {

  // });

}