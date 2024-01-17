const express = require("express")
const app = express();
const bcrypt = require("bcrypt")
const router = express.Router();


app.set("view engine", "ejs") 
app.use(express.urlencoded({extended: false}))

const users = []

router.get("/", (req,res) => {
    res.render("index.ejs")
})

router.get("/register", (req,res) => {
    res.render("register.ejs")
})

router.get("/login" , (req,res) => {
    res.render("login.ejs")
})

router.get("*", (req,res) => {
    res.send("page not found")
})

router.post("/register" , async (req,res) => {
    try {
        const {username, email,password} = req.body
        const hashedPassword = await bcrypt.hash(password, 10)
        users.push({
            id: Date.now().toString(),
            name: username,
            email: email, 
            password: hashedPassword  
        }) 
        console.log("login")
        res.redirect("/login")
    }
    catch(err) {
        console.log(err)
        console.log("register")
        res.redirect("/register")
    }
    console.log(users)
    
})

module.exports = router