const dotenv = require('dotenv');

const getPathDotenv = () => {
  //const pathbase = `${__dirname}\\`;
  const pathbase = './envs/';
  //console.log('NODE_ENV: #'+ process.env.NODE_ENV +'#');
  const filename = process.env.NODE_ENV ? `.${process.env.NODE_ENV}` : '';
  return `${pathbase}.env${filename}`;
};

const path = getPathDotenv();
//console.log('Configuração: ', path);

dotenv.config({
  path
});