import database from "../config/db.config.js";
import category from "./category.model.js";
import { DataTypes } from "sequelize";

/* Defining the product model. */
const product = database.define(
  "product",
  {
    productId: {
      field: "id",
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: { type: DataTypes.STRING },
    url_image: { type: DataTypes.STRING },
    price: { type: DataTypes.FLOAT },
    discount: { type: DataTypes.INTEGER },
    categoryId: {
      field: "category",
      type: DataTypes.INTEGER,
      references: { model: category, key: "id" },
      onUpdate: "CASCADE",
      onDelete: "RESTRICT",
    },
  },
  { tableName: "product", timestamps: false }
);

export default product;
