import express from "express";
import route from "./routers";

const app = express();

app.use(express.json());

app.use("/users", route);

app.listen(3000, () => {
  console.log("Rodando");
});
