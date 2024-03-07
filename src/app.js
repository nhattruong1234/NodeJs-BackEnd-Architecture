const compression = require("compression");
const express = require("express");
const { default: helmet } = require("helmet");
const morgan = require("morgan");
const { compile } = require("morgan");
const app = express();

// init middlewares
app.use(morgan("dev"));
// app.use(morgan("common"));
// app.use(morgan("combined"));
// app.use(morgan("short"));
// app.use(morgan("tiny"));
app.use(helmet());
app.use(compression());

// init db
require("./dbs/init.mongodb");
const { checkOverload } = require("./helpers/check.connect");
checkOverload();

app.get("/", (req, res, next) => {
  const strCompress = "Hello Hi NT";
  return res
    .status(500)
    .json({ message: "Hello NT", metadata: strCompress.repeat(1000) });
});
module.exports = app;
