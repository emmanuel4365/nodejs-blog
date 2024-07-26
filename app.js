import * as dotenv from "dotenv";
import express from "express";
import expressLayouts from "express-ejs-layouts";

const app = express();

dotenv.config();

const port = process.env.PORT || 5000;

app.use(express.static("public"));

//Templating Engine
app.use(expressLayouts);

app.set("layout", "./layouts/main");

app.set("view engine", "ejs");

app.get("", (req, res) => {
  res.send("Hello world");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
