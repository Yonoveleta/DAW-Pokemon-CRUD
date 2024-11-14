let express = require("express")
const path = require("path") 
const {connect} = require("./js/database")

let app = express()
const PORT = 3000

// set template engine
app.set("view engine", "ejs")

// save server port
app.set("port", process.env.PORT || PORT)

// import routes
const pokemonRouter = require("./js/routes/pokemon-router")

// set body parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// set routes
app.use("/pokemon", pokemonRouter)

// set static files route
app.use(express.static(path.join(__dirname, "public")))

// connect  to db
connect()

// start server
app.listen(app.get("port"), () => {
    console.log(`Server listening on port ${PORT}`)
})

// set default route
app.get("*", (req, res) => {
    res.redirect("/pokemon")
})