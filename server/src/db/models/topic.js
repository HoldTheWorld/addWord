'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Topic extends Model {
    static associate({User, Word}) {
      this.belongsTo(User, {
        foreignKey: 'id',
      });
      this.hasMany(Word, {
        foreignKey: 'topic_id',
      })
    }
  }
  Topic.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Topic',
  });
  return Topic;
};
