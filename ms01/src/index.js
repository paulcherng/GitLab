var express = require("express")
var cors = require("cors")
var app = express()
// var mysql =require("mysql")
// var connection=mysql.createConnection({
//     host:"localhost",
//     user:"",
//     password:"",
//     database:""
// })
// connection.connect();
app.use(cors())
app.post("/login", (req, res) => {
    console.log(req.body)
    res.send("success")
})
app.get("/LoginPage", (req, res) => {
    console.log("Entering Login Page")
    res.sendFile(__dirname + "/html/LoginPage.html");
})

app.get("/", (req, res) => {
    console.log(req.query)
})

app.listen(5000, () => {
    console.log("server 5000 starting~")
})