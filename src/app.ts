import express from "express";
import { router } from "./router";
import mysql from "mysql";
import { db } from "@/database/sqlConnect";
import dotenv from "dotenv";
import cors from "cors";
import swaggerUi from "swagger-ui-express";

// settings
const swaggerDocument = require("./swagger_output.json");
dotenv.config();
const corsOptions = {
  origin: ["http://www.example.com", "http://localhost:3000"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
  allowedHeaders: [
    "Content-Type",
    "Authorization",
    "Access-Control-Allow-Origin",
  ],
};

const app: express.Application = express();
app.use(express.json());
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(cors(corsOptions));
const port = 4000;

// add router
for (const route of router) {
  app.use(route.getRouter());
}

app.get("/", (req, res) => {
  res.send("The server is working!");
});
app.listen(port, () => {
  if (port === 4000) {
    console.log("true");
  }
  console.log(`server is listening on ${port} !!!`);
});
