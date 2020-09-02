const envFound = require('dotenv').config()

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || 'development';


if (envFound.error) {
  // This error should crash whole process
  
  console.error(`
  ⚠️  Could not find .env file  ⚠️
    Please create a .env file with the appropriate properties e.g.
    DB_NAME=mydatabase
    DB_USER=root
  `);
  process.exit(1)

}

module.exports = {
  port: parseInt(process.env.PORT, 10),
  db: {
    name: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD
  },
  /**
   * API configs
   */
  api: {
    prefix: '/api',
  }
};
