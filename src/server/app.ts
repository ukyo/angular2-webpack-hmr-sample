import * as path from "path";
import * as express from "express";
import * as cookieParser from "cookie-parser";
import * as bodyParser from "body-parser";
import * as morgan from "morgan";
import * as webpack from "webpack";
import { router } from "./routes";

const app = express();
const port = "4000";
const viewPath = path.join(__dirname, "views");

// Setup view engine
const renderer = require("ect")({
    watch: true,
    root: viewPath,
    ext: ".html",
});

const compiler = webpack(require("../webpack.config"));

app.use(require("webpack-dev-middleware")(compiler, {
  noInfo: true,
  publicPath: "/",
  stats: {colors: true}
}));

app.use(require("webpack-hot-middleware")(compiler, {
  log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
}));

app.engine("html", renderer.render);
app.set("view engine", "html");
app.set("views", viewPath);
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use("/", router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
