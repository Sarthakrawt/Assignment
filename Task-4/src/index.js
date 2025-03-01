import { app } from "./app/app.js";
import dotenv, { configDotenv } from "dotenv";

 dotenv.config()

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
});