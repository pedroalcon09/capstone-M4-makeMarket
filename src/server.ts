import app from "./app";
import { AppDataSource } from "./data-source";
const port = process.env.PORT || 3000;

(async () => {
  await AppDataSource.initialize().catch((err) =>
    console.log("Error during data source initialization", err)
  );

  app.listen(process.env.PORT || 3000);
})();
