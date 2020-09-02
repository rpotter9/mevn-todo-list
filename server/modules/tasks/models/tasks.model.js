'use strict'

module.exports = (sequelize, DataTypes) => {
    const Task = sequelize.define("Task", {
      description: {
        type: DataTypes.STRING
      },
      completed: {
        type: DataTypes.BOOLEAN
      }
    });
  
    return Task;
};