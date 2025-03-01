import express from "express"
import router from "../routes/task.routes.js"
const app = express();

//middleware
app.use(express.json());
app.use("/", router);

export {app};