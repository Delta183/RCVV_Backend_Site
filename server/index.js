import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

// Be sure to import routers
import articleRoutes from './routes/articles.js';

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());
// Linking the router for the Articles
app.use('/articles', articleRoutes);

// MongoDB Atlas connection
const CONNECTION_URL = "mongodb+srv://Delta183:Selene1995@cluster1.uwhyejd.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

// These are promises with the .then, .catch.
// This is what connects us to the database
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

// DEPRECATED - mongoose.set('useFindAndModify', false);