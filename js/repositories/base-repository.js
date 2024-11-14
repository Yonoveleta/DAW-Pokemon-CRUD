const {client} = require('../database')

class BaseRepository {

  constructor(collectionName) {
    this.client = client
    const objs = this.init(collectionName)
    this.db = objs.db
    this.collection = objs.collection
  }

  init(collectionName) {
    const db = client.db("pokemon_db")
    const collection = db.collection(collectionName)
    return {db, collection}
  }

  async getCollections() {
    return await this.db.listCollections().toArray()
  }

}

module.exports = BaseRepository