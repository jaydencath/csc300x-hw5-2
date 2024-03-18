const express = require("express");
const app = express();
const fs = require("fs").promises;
const multer = require("multer");
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(multer().none());
const PORT = process.env.PORT || 8000;
app.listen(PORT);

// This GET request is used to list the categories in the jokebook.
app.get('/jokebook/categories', async (req, res) => {
    try {
        res.send(categories);
    } catch (err) {
        res.status(500).type('text').send('Error!');
    }
});
// This GET request is used to list all jokes in a selected category.
app.get('/jokebook/joke/:category', async (req, res) => {
    try {
        const category = req.params.category;
        const limit = req.query.limit;

        if (!categories.includes(category)) {
            res.status(500).type('text').send('No category listed for: ' + category);
            return;
        }
        let placeholder;
        if (category === 'funnyJoke') {
            placeholder = funnyJoke;
        } else if (category === 'lameJoke') {
            placeholder = lameJoke;
        } else {
            res.status(500).type('text').send('Category not found!');
            return;
        }
        if (limit) {
            placeholder = placeholder.slice(0, limit);
        }
        res.json(placeholder);

    } catch (err) {
        res.status(500).type('text').send('Error!');
    }
});
// This POST request is used to add a new joke to the jokebook.
app.post('/jokebook/joke/new', async (req, res) => {
    const category = req.body.category;
    const joke = req.body.joke;
    const response = req.body.response;

    if (!category || !joke || !response) {
        res.status(400).type('text').send({'error': 'invalid or insufficient user input'});
        return;
    }

    if (!categories.includes(category)) {
        res.status(500).type('text').send('No category listed for: ' + category);
        return;
    }
    let placeholder;
    try {
        if (category === 'funnyJoke') {
            funnyJoke.push({
                'joke': joke,
                'response': response
            });
            placeholder = funnyJoke;
        } else if (category === 'lameJoke') {
            lameJoke.push({
                'joke': joke,
                'response': response
            });
            placeholder = lameJoke;
        }

        res.status(200).json(placeholder);
        console.log(placeholder);


    } catch (err) {
        res.status(500).type('text').send('Error!');
    }
});


let categories = ['funnyJoke', 'lameJoke'];
let funnyJoke = [
    {
        'joke': 'Why did the student eat his homework?',
        'response': 'Because the teacher told him it was a piece of cake!'
    },
    {
        'joke': 'What kind of tree fits in your hand?',
        'response': 'A palm tree'
    },
    {
        'joke': 'What is worse than raining cats and dogs?',
        'response': 'Hailing taxis'
    }
];
let lameJoke = [
    {
        'joke': 'Which bear is the most condescending?',
        'response': 'Pan-DUH'
    },
    {
        'joke': 'What would the Terminator be called in his retirement?',
        'response': 'The Exterminator'
    }
];
