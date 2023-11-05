import express from "express";

const app = express();
const port = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

const database = [
    {
        "id": 1,
        "name": "GIA",
    },
    {
        "id": 2,
        "name": "Val",
    },
]

// rest api endpoints:

app.get('/users', (req, res) => {
    res.send(database)
});

app.get('/users/:id', (req, res) => {
    const userId = Number.parseInt(req.params.id);
    if (userId <= database.length) {
        res.send(database[userId - 1]);
    } else {
        res.status(404).send()
    }
});


app.post('/users', (req, res) => {
    const newUser = req.body
    newUser.id = database.length + 1
    database.push(newUser)
    res.status(201).send(newUser);
});


app.delete('/users/:id', (req, res) => {
    const userId = Number.parseInt(req.params.id);
    database.splice(userId - 1, 1);
    res.status(204).send();
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
