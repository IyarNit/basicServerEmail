
const mongo = require("mongodb").MongoClient
require("dotenv").config()

let connection = null;
const MongoDbConnection = async () => {
    try {
        if (connection) return connection
        connection = await mongo.connect(`${process.env.MONGO_DB_URL}`,
            { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false, useUnifiedTopology: true })
        console.log(`connected to :${process.env.MONGO_DB_URL}/${process.env.DB_NAME}`);
        return connection;

    }
    catch (error) {
        console.log("MongoDB connection error",error.message)
        process.exit(1)
    }
}














// const MongoDbConnection = async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGO_DB_URL}/${process.env.DB_NAME}`,
//             { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false, useUnifiedTopology: true })
//         console.log(`conect to :${process.env.MONGO_DB_URL}/${process.env.DB_NAME}`);

//     } catch (error) {
//         console.log(error.message)
//         process.exit(1)
//     }
// }

module.exports = MongoDbConnection;



