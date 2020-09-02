const Sequelize = require('sequelize');
const { db } = require('../config');

/**
 * Create Database if it doesn't exist. Should be executed before sequelize.sync()
 */

const createDatabaseIfNotExists = async () => {
    try {
        const sequelize = new Sequelize('', db.username, db.password, {
            dialect         : 'mariadb',
            logging         : false,
            dialectOptions: {
                timezone: 'Etc/GMT0',
            },
            });
        
        await sequelize.query(`CREATE DATABASE IF NOT EXISTS \`${db.name}\`;`)
        return true
     
    }
    catch(err){
        console.log(err)
        return false
    }

};

module.exports = createDatabaseIfNotExists;