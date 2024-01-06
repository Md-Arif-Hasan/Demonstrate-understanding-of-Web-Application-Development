const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const database = require('./db.config');
const router = require('./routes/index');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const PORT = process.env.PORT || 3000;


database.connectToDatabase();

const globalErrorHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const msg = err.message || 'Oops! something went wrong. Please try again';
    res.status(statusCode).send(msg);
  }
  
app.use('/api/v1', router);

app.use('*', (req, res) => {
    res.status(404).json({
      success: 'false',
      message: 'Page not found',
      error: {
        statusCode: 404,
        message: 'You reached a route that is not defined on this server',
      },
    });
});



app.use(globalErrorHandler);

app.listen(PORT, () => {
    console.log(`KONTINENTALIST APP started on ${PORT}`);
});