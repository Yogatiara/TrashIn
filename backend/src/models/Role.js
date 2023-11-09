import { DataTypes } from "sequelize";
import db from "../../configs/db.js";

const Role = db.define("roles", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: DataTypes.STRING,
});


export default Role;