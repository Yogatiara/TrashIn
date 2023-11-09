import db from "../../configs/db.js";

const EventTPSUser = db.define("event_tps_users", {
  id: {
    type: db.Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  event_id: {
    type: db.Sequelize.INTEGER,
    references: {
      model: "events",
      key: "id",
    },
  },
  tps_id: {
    type: db.Sequelize.INTEGER,
    references: {
      model: "tps",
      key: "id",
    },
  },
  user_id: {
    type: db.Sequelize.INTEGER,
    references: {
      model: "users",
      key: "id",
    },
  }
});

export default EventTPSUser;