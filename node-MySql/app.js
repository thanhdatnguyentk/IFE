const express = require("express")
const mysql = require("mysql")


const app = express()

const database = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodejs-login'
})

database.connect( (error) =>{
    if(error) {
        console.log(error)
    }
    else {
        console.log("My SQL connected...")
    }
})
app.get("/", (req, res) => {
    res.send("<h1>Home Page<h1>")
})


app.listen(5000, () => {
    console.log("Sever started on Port 5000")
})