const { MongoClient } = require('mongodb');
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const fs = require('fs');

// Уникальные айдишки, чтобы всегда создавать новых персонажей, планеты, космические корабли

const planetIdPath = './IDs/planetID.txt';
const personIdPath = './IDs/personID.txt';
const starshipIdPath = './IDs/starshipID.txt';

const app = express();

// выходила корс ошибка, чатгпт написал данный скрипт чтобы избежать этой ошибки
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-Requested-With,content-type'
  );
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

const PORT = 5000;

const uri =
  'mongodb+srv://madik:madik123@cluster-init.vpuhebk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster-init';

const client = new MongoClient(uri);

function updateID(objectID, objectPath) {
  fs.writeFileSync(objectPath, objectID.toString(), 'utf-8');
}

function getID(objectPath) {
  if (fs.existsSync(objectPath)) {
    const id = fs.readFileSync(objectPath, 'utf-8');
    return parseInt(id, 10);
  }
  return 1;
}

let planetID = 0;
let personID = 0;
let starshipID = 8; // потому что кораблей до id <=8 мало, например, в апишке нету людей с id 1, 2 итд

async function startServer() {
  await client.connect();
  console.log('Connection is established!');

  const database = client.db('test');

  // (await database.collections()).forEach((e) => {
  //   e.deleteMany({});
  // });

  //
  try {
    app.get('/get_collections', async (req, res) => {
      try {
        const collections = await database.listCollections().toArray();
        res.json(collections);
      } catch (e) {
        res.status(500).send('Errors..', e);
      }
    });

    app.get('/create_character', async (req, res) => {
      try {
        personID = getID(personIdPath);
        const response = await axios.get(
          `https://swapi.dev/api/people/${personID}/`
        );
        await database.collection(`characters`).insertOne(response.data);
        res.send(`Person ${personID} is created!`);
        personID++;
        updateID(personID, personIdPath);
      } catch (e) {
        res.send(e);
      }
    });

    app.get('/create_planet', async (req, res) => {
      try {
        planetID = getID(planetIdPath);
        const response = await axios.get(
          `https://swapi.dev/api/planets/${planetID}/`
        );
        await database.collection(`planets`).insertOne(response.data);
        res.send(`Planet ${planetID} is created!`);
        planetID++;
        updateID(planetID, planetIdPath);
      } catch (e) {
        res.send(e);
      }
    });

    app.get('/create_starship', async (req, res) => {
      try {
        starshipID = getID(starshipIdPath);
        const response = await axios.get(
          `https://swapi.dev/api/starships/${starshipID}/`
        );
        await database.collection(`starships`).insertOne(response.data);
        res.send(`Starship ${starshipID} is created!`);
        starshipID++;
        updateID(starshipID, starshipIdPath);
      } catch (e) {
        res.send(
          'The starship with this id doesnt exist. Send request again to try another id.'
        );
        starshipID++;
        updateID(starshipID, starshipIdPath);
      }
    });

    app.use(bodyParser.json());

    /*
    Post request /get_collectionData
    body: {
      collection_name: planets || starships || people
    }
    возвращает данные одной из трех коллекций
    */

    app.post('/get_collectionData', async (req, res) => {
      const requestBody = req.body;
      const collectionName = requestBody.collection_name;
      try {
        res.json(
          await database.collection(`${collectionName}`).find({}).toArray()
        );
      } catch (e) {
        res.status(500).send('Some errors..');
      }
    });

    app.listen(PORT, () => {
      console.log('Server is running..');
    });
  } catch (e) {
    console.log(e);
  }
}

startServer();
