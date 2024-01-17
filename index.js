const express = require("express")
const app = express()
const user = require("./route/user.js")

app.use(express.urlencoded({extended: false}))
app.use("/", user)

app.listen(3000)