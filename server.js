require('./envs/loadDotenv');
const app = require('./custom-express')();

const server = app.listen(process.env.SERVER_PORT || 3001, function () {
  console.log('Servidor rodando na porta ' + process.env.SERVER_PORT);
});