'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Word extends Model {
    static associate({Topic}) {
      this.belongsTo(Topic, {
        foreignKey: 'topic_id',
      })
    }
  }
  Word.init({
    value1: DataTypes.STRING,
    value2: DataTypes.STRING,
    topic_id: DataTypes.INTEGER,
    is_Learned: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Word',
  });
  return Word;
};
