const express = require('express');
const load = require('express-load');
const bodyParser = require('body-parser');
const cors = require('cors');

module.exports = () => {
  const app = express();

  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());
  app.use(cors());

  load('routes')
    .into(app);

  app.use((req, res) => {
    console.log('Recurso não encontrado: ' + req.originalUrl);
    res
      .status(404)
      .send({
        error: 'recurso não encontrado'
      });
  });

  app.use((error, req, res, next) => {
    console.error('Erro no middleware');
    console.error(error);
    res
      .status(500)
      .send({
        error: 'erro interno do servidor'
      });
  });

  return app;
};