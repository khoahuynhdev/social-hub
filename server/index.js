/* 3rd party modules */
const express = require('express');
const mysql = require('mysql');
/* App modules */
const config = require('./config/config');

const app = express();

const { host, user, password, database } = config.dbConnection;
const connection = mysql.createConnection({ host, user, password, database });
connection.connect((err) => {
  if (err) return console.log(err);
  console.log('Connected as id', connection.threadId);
});

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use('/api/users', require('./components/users/userAPI'));
const port = config.port || 5000;

app.listen(port, () => {
  console.log(`Listening on port ${port} in ${config.envName}`);
})