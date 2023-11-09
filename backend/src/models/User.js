import db from "../../configs/db.js";
import { DataTypes } from "sequelize";

const User = db.define("users", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  no_telp: DataTypes.STRING,
  alamat: DataTypes.STRING,
  jenis_kelamin: DataTypes.ENUM("L", "P"),
  password: DataTypes.STRING,
  role_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "roles",
      key: "id",
    },
  }
});

export default User;