//Moduuli mongoose spesifiselle koodille
const mongoose = require('mongoose')

const url = process.env.MONGODB_URI

console.log('connecting to', url)
//Yhdistetään tietokantaan, kerrotaan lopputulos
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })
//Luodaan skeema
  const personSchema = new mongoose.Schema({
    name: String,
    number: String
  })
//Muokataan mongolta saadut oliot järkevään tulostus muotoon, eli poistetaan siitä mongon käyttämä ID sekä versio
personSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})
//Exportataan malli
module.exports = mongoose.model('Person', personSchema)