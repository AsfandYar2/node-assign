const express = require("express");
const connectDB = require("./config/db");
const path = require("path");
app = express();

//mongodb connect
connectDB();

//Init Middleware
app.use(express.json({ extended: false }));

app.use("/api/post", require("./routes/post"));
app.use("/api/user", require("./routes/User"));
app.use("/api/auth", require("./routes/auth"));

//serve static asset in production
if (process.env.NODE_ENV === "production") {
  //set static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 2000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
