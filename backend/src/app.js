import express from "express";
import morgan from "morgan";
import authRouter from "./routes/AuthRoutes.js";
import tpsRouter from "./routes/TPSRoutes.js";
import eventRouter from "./routes/EventRoutes.js";
import { errorHandler } from "./middlewares/ErrorHandler.js";
import userRouter from "./routes/UserRoutes.js";

const app = express();

app.use(express.static('public'))
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.use("/api/auth", authRouter);
app.use("/api/tps", tpsRouter);
app.use("/api/event", eventRouter);
app.use("/api/user", userRouter);
// main();

app.use(errorHandler);
export default app;
