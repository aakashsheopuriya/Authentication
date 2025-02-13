import express from "express";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";
import connectDB from "./mongoDB/mongoDB.js";
import authRouter from "./routes/authRoutes.js";
import userRouter from "./routes/userRoutes.js";

const app = express();
const port = process.env.PORT || 4000;
connectDB();
const allowedOrigins = ["http://localhost:5174/"];
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

//api endpoints
app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);

app.listen(port, () =>
  console.log(`server is running on http://localhost:${port}`)
);
