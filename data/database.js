import mongoose from "mongoose";

const connectDB = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "backendapi"
    })
        .then(() => { console.log('Database is connected'); })
        .catch((e) => { console.log(e); })
}
 export default connectDB;