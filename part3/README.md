- Greeting endpoint: 'https://suki-phonebook-app.fly.dev/'

- GET all phonebooks: 'https://suki-phonebook-app.fly.dev/persons'

- GET numbers of persons in phonebook: 'https://suki-phonebook-app.fly.dev/info'

- GET a specific person: 'https://suki-phonebook-app.fly.dev/persons/:id'

- POST new user: 'https://suki-phonebook-app.fly.dev/persons'

    body {
        name: 'Suki', 
        number: 1234
    }

- PUT - update existing user's number: 'https://suki-phonebook-app.fly.dev/persons/:id'

    body {
        id: 1,
        name: 'Suki',
        number: 5678
    }

- DELETE a user: 'https://suki-phonebook-app.fly.dev/persons/:id'

