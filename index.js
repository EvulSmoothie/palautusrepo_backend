const express = require('express')
const app = express()
var morgan = require('morgan')
app.use(express.json()) 
const cors = require('cors')
app.use(cors())

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
  morgan.token('content', function (req, res) { return JSON.stringify(req.body) })

  app.use(morgan(':method :url :status :res[content-length] - :response-time ms :content'))

  app.get('/api/info', (req, res) => {
    res.send('<p>Phonebook has info for '+persons.length+" people</p> <h2>"+ Date() +"</h2>")
  })


  app.get('/api/persons', (req, res) => {
    res.json(persons)
  })

  app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
  const person = persons.find(note => note.id === id)
  if (person) {
    response.json(person)
  } else {
    response.status(404).end()
  }
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(note => note.id !== id)
  
    response.status(204).end()
  })

  const generateId = () => {
    const randomid = Math.floor(Math.random()*100000)
    return randomid
  }
  
  app.post('/api/persons', (request, response) => {
    const body = request.body
    console.log(body)
    if (!body.name) {
      return response.status(400).json({ 
        error: 'name missing' 
      })
    }

    if (!body.number) {
        return response.status(400).json({ 
          error: 'number missing' 
        })
      }
    
    const person = {
      name: body.name,
      number: body.number,
      id: generateId(),
    }
    if(persons.map((person)=> {return person.name}).includes(person.name)){
        return response.status(400).json({ 
            error: 'person already in phonebook' 
          })
    }

    persons = persons.concat(person)
  
    response.json(person)
  })
  
  const PORT = process.env.PORT || 3001
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })