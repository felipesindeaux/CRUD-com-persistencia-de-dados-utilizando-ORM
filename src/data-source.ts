require("dotenv").config();
import { DataSource } from "typeorm";
import { User } from "./models/user.entity";

export const AppDataSouce = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,

  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PWD,
  database: process.env.POSTGRES_DB,

  synchronize: false,
  logging: true,
  entities: [User],
  migrations: ["src/migrations/*.ts"],
});

AppDataSouce.initialize()
  .then(() => console.log("Data Souce Initialized"))
  .catch((err) => console.log("Error during Data Source Inicialization", err));
