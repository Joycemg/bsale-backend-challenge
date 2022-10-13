import { DataTypes } from "sequelize";

const category = db.define(
  "category ",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: { type: DataTypes.STRING },
  },
  { tableName: "category", timestamps: false }
);

export default category;
