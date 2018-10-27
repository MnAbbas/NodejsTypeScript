import { MONGODB_URI } from "./helpers/secrets";
import * as restify from "restify";
import * as mongoose from "mongoose";
import restifyValidator from "restify-validator";

// import expressValidator from "express-validator";


// Load environment variables from .env file, where API keys and passwords are configured
// dotenv.config({ path: ".env.example" });

// Load production environment variables
// dotenv.config({ path: ".env" });

// Controllers (route handlers)
import * as ordercontroller from "./controllers/order";
import * as homeController from "./controllers/home";
// import * as apiController from "./controllers/api";
// import * as contactController from "./controllers/contact";

// graphql configuration
// import { DefaultRoutes, RestifyRoutes } from "./routes";


// Create Express server
// const app = express();
const app = restify.createServer();
// Connect to MongoDB
app.use(restify.plugins.bodyParser({ mapParams: true }));
app.use(restify.plugins.queryParser({ mapParams: true }));
app.use(restifyValidator);


const mongoUrl = MONGODB_URI;
mongoose.connect(mongoUrl, {useMongoClient: true}).then(
  () => { /** ready to use. The `mongoose.connect()` promise resolves to undefined. */ },
).catch(err => {
  console.log("MongoDB connection error. Please make sure MongoDB is running. " + err);
  
});

// Express configuration

// app.use(
  // express.static(path.join(__dirname, "public"), { maxAge: 31557600000 })
// );

/**
 * Primary app routes.
 */
app.get("/", homeController.index);
app.put("/order/:id", ordercontroller.takeorder); //statuN: 'taken'
app.post("/order", ordercontroller.addorder); //origin : ["40.7421","-73.9914"], destination : ["41.8337329","-87.7321554"]}
app.get("/orders", ordercontroller.allorders); //page=1&limit=3


/**
 * Map Restify API Routes
 */
// const router = express.Router();
// DefaultRoutes.map(app); // Map routes to the express application
// RestifyRoutes.map(app, router); // Map RestifyRoutes

export default app;