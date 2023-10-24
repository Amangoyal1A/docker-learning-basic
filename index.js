const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;


app.use(express.json());

app.get("/", (req, res) => {
  return res.json({
    message: "Hey, I am Node.js in a container",
    status: res.statusCode,
  });
});

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
