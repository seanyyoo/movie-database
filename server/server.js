const path = require('path');
const express = require('express');
const app = express();
const apiRouter = require('./api.js');
const PORT = 3000;


//handiling parsing request body
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.resolve(__dirname, '../src')));
app.use(express.static(path.resolve(__dirname, '../Public')));

app.use('/api', apiRouter);


app.use((req, res) => res.status(404).send('This is not the page you\'re looking for...'));



app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});



app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});


module.exports = app;