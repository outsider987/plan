import express from "express";
import { router } from "./router";

const app: express.Application = express();
const port = 9000;
// add router
for (const route of router) {
  app.use(route.getRouter());
}

app.get("/", (req, res) => {
  res.send("The server is working!");
});
app.listen(port, () => {
  if (port === 9000) {
    console.log("true");
  }
  console.log(`server is listening on ${port} !!!`);
});