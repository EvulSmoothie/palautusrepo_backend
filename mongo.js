/* eslint-disable no-undef */
//MongoDB testi, mahdollistaa MongoDB tietokannantulostuksen tai sinne lisäyksen konsolin komennoilla
const mongoose = require('mongoose')
//varmistetaan että annettiin salasana
if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}
//Otetaan komennosta syötteet
const password = process.argv[2]
const nimi = process.argv[3]
const numero = process.argv[4]
//Yhdistetään tietokantaan annetulla salasanalla
const url =
  `mongodb+srv://fullstack:${password}@cluster0.ssy4c.mongodb.net/puhelinluettelodb?retryWrites=true&w=majority`
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
//Luodaan schema mondoDB:tä varten
const personSchema = new mongoose.Schema({
  name: String,
  number: String
})
//Luodaan malli ihmisestä
const Person = mongoose.model('Person', personSchema)
//Jos ei annettu komennossa lisättävän tietoja, tulostetaan tietokanta sen sijaan
if(typeof nimi === 'undefined'){
  console.log('phonebook:')
  Person.find({}).then(result => {
    result.forEach(person => {
      console.log(person.name, person.number)
    })
    mongoose.connection.close()
  })
}
//Jos taas komennossa oli ihmisen tiedot, lisätään se tietokantaan
else{
  const person = new Person({
    name: nimi,
    number: numero
  })

  person.save().then(() => {
    console.log(`added ${nimi} number ${numero} to phonebook`)
    mongoose.connection.close()
  })
}
