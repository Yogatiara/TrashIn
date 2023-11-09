import User from "./User.js";
import Role from "./Role.js";
import TPS from "./TPS.js";
import TPSImage from "./TPSImage.js";
import EventRelawan from "./EventRelawan.js";
import EventRelawanImage from "./EventRelawanImage.js";
import EventRelawanTPSUser from "./EventRelawanTPSUser.js";
import db from "../../configs/db.js";

try {
  // db.sync({ force: true }).then(() => {
  //   ["super-admin", "admin", "user"].map(async (role) => {
  //     await Role.create({ name: role });
  //   });
  // });
  await db.authenticate();
  console.log('Database connected.');

} catch (error) {
  console.error('Unable to connect to the database:', error);
}
