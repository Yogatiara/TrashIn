import express from "express";
import morgan from "morgan";
import "./models/index.js";
import Role from "./models/Role.js";
import User from "./models/User.js";
import TPS from "./models/TPS.js";
import Event from "./models/EventRelawan.js";
import EventTPSUser from "./models/EventRelawanTPSUser.js";

const app = express();


app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));

app.get('/', async (req, res) => {
  const roles = await Role.findAll();
  res.json(roles);
});

app.post('/users', async (req, res) => {
  const { name, email, no_telp, alamat, jenis_kelamin, password, role_id } = req.body;
  const user = await User.create({ name, email, no_telp, alamat, jenis_kelamin, password, role_id });
  res.json(user);
});

app.post('/tps', async (req, res) => {
  const { latitude, longitude, alamat, keterangan, isClean, user_id } = req.body;
  const tps = await TPS.create({ latitude, longitude, alamat, keterangan, isClean, user_id });
  res.json(tps);
})

app.post('/events', async (req, res) => {
  const {
    nama_event,
    tanggal_mulai,
    tanggal_selesai,
    keterangan,
    titik_kumpul,
    kuota,
    status
  } = req.body
  const event = await Event.create({...req.body})
  res.send(event);
})

app.post('/event_tps_user', async (req, res) => {
  const enrolled = await EventTPSUser.create({...req.body});

  res.send(enrolled);
})


export default app;