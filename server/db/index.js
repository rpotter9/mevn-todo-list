'use strict';

const fs = require('fs'),
  path = require('path'),
  location = path.resolve("./modules"),
  Sequelize = require('sequelize'),
  createDatabaseIfNotExists = require('./createDatabaseIfNotExists'),
  config = require('../config')

let db = {};

/**
 * Initializes Sequelize
 * 
 * Models are located at modules -> *your module* -> models
 */
const init = async () => {
  
  // Sequelize
  let sequelize = new Sequelize( 
    config.db.name,
    config.db.username, 
    config.db.password, {
      dialect: "mariadb",
      host: "localhost",
      dialectOptions: {
        timezone: 'Etc/GMT0',
      },
  });

    fs.readdirSync(location)
      .filter(dir => {
        return fs.statSync(`${location}/${dir}`).isDirectory();
      })
      .forEach(modelPath => {

          modelPath = `../modules/${modelPath}/models/${modelPath}.model`
          const model = require(modelPath)(sequelize, Sequelize.DataTypes);
          db[model.name] = model;
    });

  // Associate models
  Object.keys(db).forEach(modelName => {
    if ('associate' in db[modelName]) {
      db[modelName].associate(db);
    }
  });

  db.sequelize = sequelize;
  db.Sequelize = Sequelize;


  const result = await createDatabaseIfNotExists()

  if(result === true){
      await db.sequelize.sync();
  }
  else{
      console.log("Problem with setting up database and models")
  }
  
}

db.init = init

module.exports = db



