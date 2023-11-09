import { DataTypes } from "sequelize";
import db from "../../configs/db.js";

const TPSImage = db.define("tps_images", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  tps_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "tps",
      key: "id",
    },
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "users",
      key: "id",
    },
  },
  img_name: DataTypes.STRING,
  path: DataTypes.STRING,
});

export default TPSImage;