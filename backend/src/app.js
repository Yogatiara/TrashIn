import express from "express";
import morgan from "morgan";
import authRouter from "./routes/AuthRoutes.js";
import tpsRouter from "./routes/TPSRoutes.js";
import eventRouter from "./routes/EventRoutes.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.use("/api/auth", authRouter);
app.use("/api/tps", tpsRouter);
app.use("/api/event", eventRouter);
// main();
export default app;
