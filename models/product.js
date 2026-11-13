'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product.init({
    id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID
      },
      productionName: {
        type: DataTypes.STRING,
        allowNull:false
      },
      productImage: {
        type: DataTypes.STRING,
        allowNull:false
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull:false
      },
      stock: {
        type: DataTypes.INTEGER,
        allowNull:false
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
  }, {
   sequelize,
    modelName:'product',
    tableName: 'products',
    timestamps: true
  });
  return Product;
};