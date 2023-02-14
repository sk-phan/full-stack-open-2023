const { response } = require('express');
const express = require('express');
const morgan = require('morgan');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors()) 

//Create custom token and log POST request
morgan.token('postData', (request) => {
    if (request.method == 'POST') return  JSON.stringify(request.body);
    else return ' ';
  });

//
app.use(
    morgan(
      ':method :url :status :res[content-length] - :response-time ms :postData'
    )
  );
  let phonebook = [
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

app.get('/persons', (request, response) => {
    response.json(phonebook)
})

app.get('/info', (request, response) => {
    const amount = phonebook.length
    response.send(`
        Phonebook has info for ${amount} people 
        $
        {new Date()}
    `)
})

//POST REQUEST
app.post('/persons', (req, res) => {
    res.json({requestBody: req.body})  // <==== req.body will be a parsed JSON object
  })


const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`) 
})

//link https://fragrant-snow-8776.fly.dev/info
