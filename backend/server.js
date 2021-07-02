// Imports
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Item = require('./models/Item');

// MongoDB Connection
const connection = 'mongodb+srv://gmauas:qwertyuiop1234567@cluster0.v39mf.mongodb.net/todoapp1?retryWrites=true&w=majority';
mongoose.connect(connection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => console.log('Database connected succesfully.')).catch(err => console.log(err));


const PORT = process.env.PORT || 4000;
const app = express();

app.use(bodyParser.json());
app.use(cors());

// == ROUTES ==
// Get all items
app.get('/', (req, res) => {
    Item.find((err, items) => {    
        if(err) {
            console.log(err);
        } else {
            res.json(items)
        }
    });
});

// Add new item
app.post('/add-item', (req, res) => {
    const item = new Item(req.body)
    item.save()
        .then((item) => {
            res.json(item);
        })
        .catch((err) => {
            res.status(500).send(err.msg);
        }); 
});

// Get one item
app.get('/:id', (req, res) => {
    const id = req.params.id;
    Item.findById(id, (err, item) => {
        res.json(item);
    })
})

// Edit item
app.post('/:id', (req, res) => {
    const id = req.params.id;
    Item.findById(id, (err, item) => {
        if(!item) {
            res.status(404).send('Item not found');
        } else {
            item.name = req.body.name;
            item.priority = req.body.priority;
            item.save()
                .then(item => res.json(item))
                .catch(err => res.status(500).send(err.msg));
        }
    })
})

// Delete item
app.delete('/:id', (req, res) => {
    const id = req.params.id;
    Item.findByIdAndRemove(id, (err, item) => {
        res.json(item);
    })
})

// Set Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
