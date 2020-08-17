//Tietokanta puhelinluettelo sovellukselle
require('dotenv').config()
const express = require('express')
const app = express()
var morgan = require('morgan')
app.use(express.json()) 
app.use(express.static('build'))
const cors = require('cors')
app.use(cors())
const Person = require('./models/person')
//Kovakoodataan tietokantaan joitakin henkilöitä
let   persons = [
    {
      "name": "Arto Hellas",
      "number": "040-123456",
      "id": 1
    },
    {
      "name": "Ada Lovelace",
      "number": "39-44-5323523",
      "id": 2
    },
    {
      "name": "Dan Abramov",
      "number": "12-43-234345",
      "id": 3
    },
    {
      "name": "Mary Poppendieck",
      "number": "39-23-6423122",
      "id": 4
    }
  ]
  //Käytetään morgania tarkastamaan pyyntöjen sisältöä
  morgan.token('content', function (req, res) { return JSON.stringify(req.body) })
  app.use(morgan(':method :url :status :res[content-length] - :response-time ms :content'))

  //Info pyyntö, lähetetään ihmisten määrä luettelossa sekä päivämäärä
  app.get('/api/info', (req, res) => {
    res.send('<p>Phonebook has info for '+persons.length+" people</p> <h2>"+ Date() +"</h2>")
  })

//Koko luettelon pyyntö, lähetään kaikki ihmiset
  app.get('/api/persons', (request, response) => {
    Person.find({}).then(notes => {
      response.json(notes)
    })
  })
//Yksittäisen henkilön pyyntö, haetaan henkilö IDn perusteella ja lähetetään
  app.get('/api/persons/:id', (request, response) => {
    Note.findById(request.params.id).then(note => {
      response.json(note)  
  })
})
//Delete pyyntö, etsitään henkilö IDn perusteella ja poistetaan, vastaus aina 204
app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(note => note.id !== id)
  
    response.status(204).end()
  })

  //Lisäys pyyntö
  app.post('/api/persons', (request, response) => {
    const body = request.body
    console.log(body)
    //Varmistetaan että henkilöllä on nimi
    if (!body.name) {
      return response.status(400).json({ 
        error: 'name missing' 
      })
    }
    //Varmistetaan että henkilöllä on numero
    if (!body.number) {
        return response.status(400).json({ 
          error: 'number missing' 
        })
      }
    //Luodaan uusi henkilö saaduilla tiedoilla
    const person = new Person({
      name: body.name,
      number: body.number,
    })
    //Tallennetaan henkilö ja vastataan tallennetuilla tiedoilla
    person.save().then(savedNote => {
      response.json(savedNote)
    })
  })
  
  //Kuunnellaan porttia
  const PORT = process.env.PORT
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })