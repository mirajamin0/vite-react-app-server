const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors()); // Allow all origins
app.use(express.json());

// Example route
app.get("/", (req, res) => {
  res.send("API is live!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
