import express from 'express';
import mongoose from 'mongoose';
import routes from './src/routes/crmRoutes.js';  // Add .js extension

const app = express();
const PORT = 3000;

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb');

// body parsing middleware (built into Express 5.x)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

routes(app);

// serving static files
app.use(express.static('public'));

app.get('/', (req, res) =>
    res.send(`Node and express server is running on port ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`your server is running on port ${PORT}`)
);