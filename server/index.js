import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors"; 
import todoRoutes from "./routes/todos.js";

dotenv.config();

const app = express();

app.use(express.json({limit: "30mb", extend: true}));
app.use(express.urlencoded({limit: "30mb", extend: true}));

const MONGO_URL = `mongodb+srv://alan:${process.env.MONGO_PASSWORD}@miprimercluster.ksxl9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get('/', (req, res) => {
    res.send('<h1>Servidor corriendo... </h1>');
});

app.use('/todos', todoRoutes);

mongoose
.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then( 
    () => app.listen(PORT), 
    () => console.log(`Server running on ${PORT}`)
)
.catch( (error) => console.log(error) )