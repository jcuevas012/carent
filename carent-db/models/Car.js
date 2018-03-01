module.exports = function (sequelize, DataTypes) {
  const Car = sequelize.define('car', {
      brand: {
        type: DataTypes.STRING,
        allowNull: false
      },
      model: {
        type: DataTypes.STRING,
        allowNull: false
      },
      vin: {
        type: DataTypes.STRING,
        allowNull: false
      },
      year: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      doors: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
  })

  // association go here
  Car.associate = (models) =>{

  }
}