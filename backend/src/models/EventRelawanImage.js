import { DataTypes } from "sequelize";
import db from "../../configs/db.js";

const EventImage = db.define("event_images", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  event_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "events",
      key: "id",
    },
  },
  img_name: DataTypes.STRING,
  path: DataTypes.STRING,
});

export default EventImage;