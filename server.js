const express = require("express")
require("dotenv").config()
const app = express()
const port = process.env.PORT
const bodyParser = require("body-parser")
const cors = require("cors")
const MongoDbConnection = require("./dbConnection/MongoConnection")
app.use(cors())
app.use(bodyParser.json())
// routes import
const emailRoute = require("./routes/sendEmail")


// routes
app.use("/", emailRoute)

app.listen(port, (err) => {
    if (err) console.log("listen error:", err.message)
    console.log(`server runs on port ${port}`)
})