const express = require("express");
const app = express();
const usersRoute = require("./routes/users");

app.use(express.json());
app.use("/api/users", usersRoute);

const PORT = 4000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
