import express from 'express'; // to set up a full-stack application
import morgan from 'morgan';
import helmet from 'helmet';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';

// Routers
import { healthRouter } from './routes/health.js';
import { productRouter } from './routes/products.routes.js';


dotenv.config();
// console.log(process.env.MONGODB_URI);


// Connect to MongoDB
await mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((e) => console.error(e))


const PORT = process.env.PORT || 4000;
const app = express()

// view engine
app.set('views', './views');
app.set('view engine', 'pug')

// Middleware: functions executed in the middle between the request and the response
app.use(express.static("./public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'));
app.use(helmet()); // add more security to your app
app.use(cors()); // if we have another app running it will be blocked by cors

// Routes
app.get('/', (req, res) => {
    res.render('index')
})

// API Routes 
app.use('/api/health', healthRouter); // this is the path we want to send the request to healthRouter
app.use('/api/products', productRouter);
app.use('/api/products/:id', productRouter)
// app.use('/api/cart')

// GLobal Error handler (middleware)
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send('Seems like we messed up somewhere...')
})


app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));