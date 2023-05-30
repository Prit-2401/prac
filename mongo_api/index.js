const express = require("express")
const mongoose = require("mongoose")
const routes = require("./routes/routes.js")

const app = express();
mongoose.connect("mongodb://localhost:27017").then(()=>{ console.log("database connect")})

app.use(express.json())
app.use("/api",routes)





app.listen(3000)
console.log("app started")