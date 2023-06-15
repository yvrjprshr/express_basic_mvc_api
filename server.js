import { app } from "./app.js";
import connectDB from "./data/database.js";

connectDB();

app.listen(process.env.PORT || 5000, ()=>{
    console.log('server is running');
})