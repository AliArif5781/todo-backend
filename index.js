import expres from "express";
import "dotenv/config";
import cors from "cors";
import cookieParser from "cookie-parser";
import { todoRoute } from "./routes/todoRoutes.js";
import { connectDb } from "./config/mongodb.js";

connectDb();
const app = expres();
const port = process.env.PORT || 4000;

app.use(cookieParser());
app.use(expres.json());
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://todo-frontend-nu-ten.vercel.app/",
    ],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("api Working");
});

app.use("/", todoRoute);

app.listen(port, () => {
  console.log(`server running at port ${port}`);
});
