const {MongoClient} = require("mongodb")

const URI = "mongodb+srv://thetruevayne:Lp1PK2krwgQAtqrN@cluster0.wpwbk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const client = new MongoClient(URI)

const connect = async () => {
  try {
    await client.connect()
    console.log(`Connected to ${client.s.url}`)
  }
  catch(error) {
    console.log(error)
  }
}

const getClient = () => {
  return client
}

module.exports.connect = connect
module.exports.client = getClient()