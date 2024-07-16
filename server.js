const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/crudapp';
mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Import routes
const itemsRoute = require('./routes/items');
app.use('/items', itemsRoute);

// Error handling middleware
app.use((err, req, res, next) => {
    if (err.name === 'CastError' && err.kind === 'ObjectId') {
        return res.status(400).json({ message: 'Invalid ObjectId format' });
    }
    return res.status(500).json({ message: 'Server Error' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


