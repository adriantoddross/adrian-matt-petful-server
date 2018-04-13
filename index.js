'use strict';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const { PORT, CLIENT_ORIGIN } = require('./config');
const { dbConnect } = require('./db-mongoose');
// const {dbConnect} = require('./db-knex');
const app = express();

/* STACK & QUEUE */

const Stack = require('./stack-and-queue/stack');

let cat = [
  {
    imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
    imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Fluffy',
    sex: 'Female',
    age: 2,
    breed: 'Bengal',
    story: 'Thrown on the street'
  },
  {
    imageURL: 'https://static.pexels.com/photos/20787/pexels-photo.jpg',
    imageDescription: 'Grey siamese cat with bright green eyes, looking up to the camera.',
    name: 'Tina',
    sex: 'female',
    age: 3,
    breed: 'Siamese',
    story: 'Abandoned by previous owner.'
  }
];

let dog = [
  {
    imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
    imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
    name: 'Zeus',
    sex: 'Male',
    age: 3,
    breed: 'Golden Retriever',
    story: 'Owner Passed away'
  },
  {
    imageURL: 'http://img.freepik.com/free-photo/husky-breed-dog-with-tongue-out_1187-1500.jpg?size=338&ext=jpg',
    name: 'June',
    sex: 'female',
    age: 1,
    breed: 'Husky',
    story: 'Rejected by mother.'
  }
];

const animals = new Stack();
animals.push(cat[0]);
animals.push(cat[1]);
animals.push(dog[0]);
animals.push(dog[1]);

/* APP ROUTES */
app.use(
  morgan(process.env.NODE_ENV === 'production' ? 'common' : 'dev', {
    skip: (req, res) => process.env.NODE_ENV === 'test'
  })
);

app.use(
  cors({
    origin: CLIENT_ORIGIN
  })
);

function runServer(port = PORT) {
  const server = app
    .listen(port, () => {
      console.info(`App listening on port ${server.address().port}`);
    })
    .on('error', err => {
      console.error('Express failed to start');
      console.error(err);
    });
}

app.get('/api/cat', (req, res) => {
  return res.json(cat[0]);
});

app.get('/api/dog', (req, res) => {
  return res.json(dog[0]);
});

// click the adopt
app.delete('/api/dog', (req, res) => {
  dog = dog.splice(1);
  return res.status(204).end();
});

app.delete('/api/cat', (req, res) => {
  cat = cat.splice(1);
  return res.status(204).end();
});

if (require.main === module) {
  dbConnect();
  runServer();
}

module.exports = { app };
