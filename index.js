import app from "./app.js";
import {MONGOPORT} from './config.js';
import connectionDB from "./db.js";


connectionDB()
app.listen(MONGOPORT, () => {
  console.log("listening in port ,",MONGOPORT);
});
