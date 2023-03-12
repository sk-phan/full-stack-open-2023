const mongoose = require('mongoose')

if (process.argv.length < 2) {
    console.log('missing password')
    process.exit(1)
}

const password = process.argv[2]
const name = process.argv[3]
const number = process.argv[4]

const url = 
    `mongodb+srv://sukiphan97:${password}@cluster0.adsgfwp.mongodb.net/?retryWrites=true&w=majority`

mongoose.set('strictQuery', false)
mongoose.connect(url)

const phonebookSchema = new mongoose.Schema({
    name: String,
    number: String,
})

const Phonebook = mongoose.model('Phonebook', phonebookSchema)

const phonebook = new Phonebook({
    name,
    number
})

phonebook.save().then(res => {
    console.log('added ', res)
    mongoose.connection.close()
})