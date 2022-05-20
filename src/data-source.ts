import { DataSource } from "typeorm";
import "reflect-metadata";

require("dotenv").config();

export const AppDataSource =
  process.env.NODE_ENV === "test"
    ? new DataSource({
        type: "sqlite",
        database: ":memory:",
        entities: ["src/entities/*.ts"],
        synchronize: true,
      })
    : new DataSource({
        type: "postgres",
        host: "localhost",
        port: 5432,
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
        entities: ["src/entities/*.ts"],
        migrations: ["src/migrations/*.ts"],
      });

/*

      -----> APP DATA SOURCE PARA DEPLOY <-----

export const AppDataSource = new DataSource({
  type: "postgres",
  url: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === "production" 
      ? { rejectUnauthorized: false }
      : false,
  synchronize: false,
  logging: true,
  entities: process.env.NODE_ENV === "production"
      ? ["dist/entities/*.js"]
      : ["src/entities/*.ts"],
  migrations: process.env.NODE_ENV === "production" 
      ? ["dist/migrations/*.js"]
      : ["src/migrations/*.ts"]
})
*/
