const Sequelize = require('sequelize');
const sequelize = new Sequelize('myproject','corey','Kheriac@1',{dialect:'mysql',host:"54.164.66.87"});

module.exports = sequelize;