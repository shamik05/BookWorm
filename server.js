// Import dependencies
const express = require("express");
const path = require("path");
const compression = require("compression");
const mongoose = require("mongoose");
const morgan = require("morgan");

const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(compression());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.use(require("./routes/api-routes"));

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Setup mongo connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useCreateIndex: true,
}).then(() => {
  console.log("Database Connected");
});

// Setup socketio connection
const server = require("http").createServer(app);
const io = require("socket.io")(server);

// Listen for an emitted saved message
io.on("connection", (socket) => {
  socket.on("saved", (msg) => {
    console.log(msg);
    io.emit("saved", msg);
  });
});

// Start server
server.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
