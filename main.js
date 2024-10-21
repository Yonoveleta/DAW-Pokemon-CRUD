let express = require("express")
const path = require("path") 

let app = express()
const PORT = 3000

app.set("view engine", "ejs")

app.use(express.static(path.join(__dirname, "public")))

app.get("/", (req, res) => {
    pokemons = [
        {
            name: "Garchomp",
            types: ["Dragon", "Ground"]
        },
        {
            name: "Pikachu",
            types: ["Electric"]
        },
        {
            name: "Infernape",
            types: ["Fire", "Fight"]
        }
    ]
    res.render("pokemons", {pokemons: pokemons})
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})