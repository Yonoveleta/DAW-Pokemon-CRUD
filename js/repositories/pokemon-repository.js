const BaseRepository = require('./base-repository')
const {ObjectId} = require("mongodb")

class PokemonRepository extends BaseRepository {

  constructor() {
    super("pokemon");
  }

  async findAll() {
    return await this.collection.find().toArray()
  }

  async findOne(filter) {
    return await this.collection.findOne(filter)
  }

  async insertOne(pokemon) {
    return await this.collection.insertOne(pokemon)
  }

  async insertMany(pokemons) {
    return await this.collection.insertMany(pokemons)
  }

  async deleteOne(pokemonid) {
    return await this.collection.deleteOne({_id: ObjectId.createFromHexString(pokemonid)})
  }

}

module.exports = PokemonRepository