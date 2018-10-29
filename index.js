const express = require('express');
const bodyParser = require("body-parser"); 
const faker = require("faker");
const lodash = require("lodash");
const app = express();
const db = require('./models');
const apiPost = require('./src/api/apiPost');
const apiAuthor = require('./src/api/apiAuthor');
app.use(bodyParser.json()); 
app.use(express.static("src/public"));

apiPost(app, db);
apiAuthor(app, db);
db.sequelize
  .authenticate()
  .then(() => {
    console.log('CONEXION EXITOSA: ');
  })
  .catch(err => {
    console.error('_ERROR Unable to connect to the database:', err);
  });

  db.sequelize.sync().then(() => {
    // populate author table with dummy data
    db.author.bulkCreate(
      lodash.times(10, () => ({
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName()
      }))
    );
    // populate post table with dummy data
    db.post.bulkCreate(
      lodash.times(10, () => ({
        title: faker.lorem.sentence(),
        content: faker.lorem.sentence(),
        authorId: lodash.random(1, 10)
      }))
    );
    });


    // app.get('/posts', (req, res) => {
    //   db.post.findAll().then(users => res.json(users))
    // });

  app.listen(8001, () => {
    console.log('app running in 8001 PORT')
  });
