import { DataTypes } from "sequelize";
import db from "../../configs/db.js";

const TPS = db.define("tps", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  latitude: DataTypes.STRING,
  longitude: DataTypes.STRING,
  alamat: DataTypes.STRING,
  keterangan: DataTypes.STRING,
  isClean: DataTypes.BOOLEAN,
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "users",
      key: "id",
    },
  }
});

export default TPS;