// Create web server
// Run the server
// Create the REST API
// Create the comments array
// Create the GET API
// Create the POST API
// Create the PUT API
// Create the DELETE API
// Create the PATCH API
// Create the HEAD API

// Import the express module
const express = require('express');

// Create an instance of the express module
const app = express();

// Create the comments array
let comments = [
    {id: 1, author: 'John Doe', body: 'Hello, World!'},
    {id: 2, author: 'Jane Doe', body: 'Hi, there!'},
    {id: 3, author: 'Alice', body: 'Nice to meet you!'},
    {id: 4, author: 'Bob', body: 'How are you?'}
];

// Create the GET API
app.get('/comments', (req, res) => {
    res.json(comments);
});

// Create the POST API
app.post('/comments', (req, res) => {
    let comment = req.body;
    comments.push(comment);
    res.status(201).json(comment);
});

// Create the PUT API
app.put('/comments/:id', (req, res) => {
    let id = req.params.id;
    let comment = req.body;
    comments.forEach((element, index) => {
        if (element.id == id) {
            comments[index] = comment;
        }
    });
    res.json(comment);
});

// Create the DELETE API
app.delete('/comments/:id', (req, res) => {
    let id = req.params.id;
    comments = comments.filter((comment) => {
        return comment.id != id;
    });
    res.json({message: 'Comment deleted successfully!'});
});

// Create the PATCH API
app.patch('/comments/:id', (req, res) => {
    let id = req.params.id;
    let comment = req.body;
    comments.forEach((element, index) => {
        if (element.id == id) {
            comments[index] = {...element, ...comment};
        }
    });
    res.json(comment);
});

// Create the HEAD API
app.head('/comments', (req, res) => {
    res.status(200).end();
});

// Run the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:
