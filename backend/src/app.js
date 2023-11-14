import express from "express";
import morgan from "morgan";
import authRouter from "./routes/AuthRoutes.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.send("Hello World");
});
app.use("/api/auth", authRouter);
// main();
export default app;
