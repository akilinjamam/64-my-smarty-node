const express = require('express');
const app = express();
const cors = require('cors')

const port = process.env.PORT || 5000;

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hellow my very very smarty world')
});

const users = [
    { id: 1, name: 'Sabana', email: 'sabana@gmail.com', number: '01788888888' },
    { id: 2, name: 'sokina', email: 'sokina@gmail.com', n7mber: '01788888878' },
    { id: 3, name: 'jorina', email: 'jorina@gmail.com', n6mber: '01788888868' },
    { id: 4, name: 'sabila', email: 'sabila@gmail.com', n5mber: '01788888858' },
    { id: 5, name: 'rohima', email: 'rohima@gmail.com', n4mber: '01788888848' },
    { id: 6, name: 'Sailaa', email: 'sailaa@gmail.com', n3mber: '01788888838' },
    { id: 7, name: 'rabeya', email: 'rabeya@gmail.com', n2mber: '01788888828' },
    { id: 8, name: 'rokeya', email: 'rokeya@gmail.com', n1mber: '01788888818' },
]


app.get('/users', (req, res) => {
    res.send(users)
})

app.get('/user/:id', (req, res) => {
    console.log(req.params)
    const id = parseInt(req.params.id);
    // const user = users[id];
    const user = users.find(u => u.id == id);
    res.send(user)
})

app.listen(port, () => {
    console.log('listening to port', port)
})