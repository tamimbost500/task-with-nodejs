const express = require("express");
const app = express();
require("dotenv").config();
var cors = require("cors");
const PORT = process.env.PORT || 8000;
const Routes = require("./routes");
const databaseConnect = require("./config/dbConfige");

//middleware
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://simple-design-reshma-khanam.netlify.app",
    ],
  })
);
app.use(express.json());

app.use(Routes);
app.get("/", function (req, res) {
  res.send("Hello World server is running");
});

const main = async () => {
  await databaseConnect();
  app.listen(PORT, () => {
    console.log("Server listening on port " + PORT);
  });
};
main();
