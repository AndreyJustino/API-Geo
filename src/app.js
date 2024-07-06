import express from "express";
const app = express();
import router from "./router.js";

app.use("/", router)

app.listen(3000, () => {
    console.log("Server is running on port http://localhost:3000")
})

export default app;
