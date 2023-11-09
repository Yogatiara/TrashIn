import { DataTypes } from "sequelize";
import db from "../../configs/db.js";

const EventRelawan = db.define("events", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nama_event: DataTypes.STRING,
  tanggal_mulai: DataTypes.DATE,
  tanggal_selesai: DataTypes.DATE,
  keterangan: DataTypes.STRING,
  titik_kumpul: DataTypes.STRING,
  kuota: DataTypes.INTEGER,
  status: DataTypes.ENUM('open', 'close'),
});

export default EventRelawan;