module.exports = function (sequelize, DataTypes) {
  return sequelize.define('car', {
      model: DataTypes.STRING
  })
}