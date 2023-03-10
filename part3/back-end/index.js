const { response } = require('express');
const express = require('express');
const morgan = require('morgan');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose')

app.use(express.json());
app.use(express.static('build'))
app.use(cors()) 

if (process.argv.length < 3) {
    console.log('give password as argument')
    process.exit(1)
}

const password = process.argv[2]

const url = 
`mongodb+srv://sukiphan97:${password}@cluster0.adsgfwp.mongodb.net/?retryWrites=true&w=majority`

mongoose.set('strictQuery', false)
mongoose.connect(url)

const phonebookSchema = new mongoose.Schema({
    id: Number,
    name: String,
    number: Number
})

phonebookSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const Phonebook = mongoose.model('Phonebook', phonebookSchema)
 
const phonebook = new Phonebook(
    [
       {
           "id": 1,
           "name": "Arto Hellas", 
           "number": "040-123456"
       },
       { 
           "id": 2,
           "name": "Ada Lovelace", 
           "number": "39-44-5323523"
       },
       { 
           "id": 3,
           "name": "Dan Abramov", 
           "number": "12-43-234345"
       },
       { 
           "id": 4,
           "name": "Mary Poppendieck", 
           "number": "39-23-6423122"
       }
   ] 
)
//Create custom token and log POST request
morgan.token('postData', (req) => {
    if (req.method == 'POST') return '' +  JSON.stringify(req.body);
    else return ' ';
  });


app.use(
    morgan(
      ':method :url :status :res[content-length] - :response-time ms :postData'
    )
  );



app.get('/', (req, res) => {
    res.json({
        message: "Welcome to my page",
    })
})

app.get('/persons', (req, res) => {
    Phonebook.find().then(person => {
        res.json(person) 
    })
})

app.get('/info', (req, res) => {
    const amount = phonebook.length
    res.json({
        response: `Phonebook has info for ${amount} people ${new Date()}`  
    })
})

app.get('/person/:id', (req,res) => {
    const id = req.params.id
    const person = phonebook.find(person => person.id === +id);
    if (person) {
        res.json(person)
    }
    else {
        res.status(404).end()
    }
})

app.delete('/persons/:id', (req, res) => {
    const id = req.params.id
    phonebook = phonebook.filter(person => person.id !== +id);
    res.status(204).end()
})
//POST REQUEST
app.post('/persons', async (req, res) => {
    const name = await req.body.name
    const number = await req.body.number

    const validName = phonebook.find(person => person.name == name)

    if (validName) {
       res.status(404).json(
            {
                error: 'name must be unique'
            }
       ).end()
    }
    else if ( !name || !number ) {
        res.status(404).json(
            {
                error: 'missing name or number'
            }
       ).end()
    }
    else {
        const newPerson = {
            ...req.body,
            id: Math.floor(Math.random() * 100000)
        }
        res.json(newPerson)
    }
  })

app.put('/persons/:id', async (req, res) => {
    const id = await req.params.id

    const updatedItem = phonebook.findIndex(item => item.id === +id)

    if (updatedItem !== -1) {
      
        phonebook[updatedItem] = {...req.body}
       
        res.json(updatedItem)
    }
    else {
        res.status(404).json(
            {
                error: 'Can not find item in current list'
            }
        ).end()
    }


    
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`) 
})




//To deploy
