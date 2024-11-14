const express = require('express')
const router = express.Router()
const PokemonRepository = require('../repositories/pokemon-repository')
const TYPES = require('../repositories/type-repository')
const {ObjectId} = require("mongodb");
const multer = require("multer")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
         cb(null, 'public/img')
   },
  filename: function (req, file, cb) {
        cb(null, file.originalname)
  }
});

const upload = multer({storage: storage})

const pokemonRepo = new PokemonRepository()

router.get("/", async (req, res) => {
    const pokemons = await pokemonRepo.findAll()
    res.render("pokemons", {pokemons: pokemons, types: TYPES})
})

router.post("/", upload.single("image"), async (req, res) => {
    let pokemon =  {
        name: req.body.name,
        types: [
            req.body.type
        ]
    }

    const insertedPokemon = await pokemonRepo.insertOne(pokemon)
    res.redirect("/")
})

router.delete("/:id", async (req, res) => {
    let pokemonid = req.params.id
    const deletedPokemon = await pokemonRepo.deleteOne(pokemonid)
    res.status(200).send()
})


module.exports = router