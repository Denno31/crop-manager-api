const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");
const userRoutes = require("./routes/userRoutes.js");
const cropRoutes = require("./routes/cropRoutes");
const fieldRoutes = require("./routes/fieldRoute.js");
const incomeCategoryRoute = require("./routes/incomeRoutes");
const expenseCategoryRouter = require("./routes/expenseRoute");
const incomeRoute = require("./routes/incomeTransaction");
const expenseRoute = require("./routes/expenseTransaction");
const varietyRoute = require("./routes/varietyRoutes.js");
const activityRoutes = require("./routes/activityRoute.js");
const employeeRoutes = require("./routes/employee");
const transactionRoutes = require("./routes/transactionRoute");
const attendanceRoutes = require("./routes/attendanceRoutes");
const itemRoutes = require("./routes/itemRoute");
const ports = require("./vessel-ports.json");
const vessels = require("./vessels.json");
const portsWithCoordinates = require("./ports.json");
const fs = require("fs");
const portswithOldIds = require("./portsOldIds.json");
const portsWithNewIds = require("./portsWithNewIds.json");
const portsWithOldAndNewIds = require("./portWithNewAndOldIds.json");
const cors = require("cors");
const {
  portsWithNewIdsData,
  portsWithNewAndOldIdsData,
  updatedVesselsData,
} = require("./processData.js");

const app = express();
dotenv.config();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
mongoose
  .connect(process.env.MONGODBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((err) => console.log(err));
const PORT = process.env.PORT || 5000;

// app.get("/", (req, res) => {
//   res.send("server is working");
// });

app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  res.send("working");
});

app.use("/api/user", userRoutes);
app.use("/api/crop", cropRoutes);
app.use("/api/field", fieldRoutes);
app.use("/api/activity", activityRoutes);
app.use("/api/incomecategory", incomeCategoryRoute);
app.use("/api/expenseCategory", expenseCategoryRouter);
app.use("/api/income", incomeRoute);
app.use("/api/expense", expenseRoute);
app.use("/api/variety", varietyRoute);
app.use("/api/employee", employeeRoutes);
app.use("/api/transaction", transactionRoutes);
app.use("/api/attendance", attendanceRoutes);
app.use("/api/items", itemRoutes);

// serve static files
// app.use(express.static("frontend/build"));
// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
// });
app.use((err, req, res, next) => {
  console.log(err.message);
  res.status(500).send({ message: err.message });
});
// const _dirname = path.resolve();

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
