import app from "./app.js";
import dotenv from "dotenv";
dotenv.config();

const { PORT, HOST } = process.env;

const server = app.listen(PORT, () => {
  console.log(
    `Local is running : http://${HOST}:${PORT} `
  );
});

export default server;