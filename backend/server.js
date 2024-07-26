require('dotenv').config()

const express = require('express');
const workoutRoutes = require('./routes/workouts');

const mongoose = require('mongoose')

const app = express();


app.use(express.json())

app.use((req,res,next) => {
    next()
})

app.use('/api/workouts',workoutRoutes);

mongoose.connect(process.env.dbURI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Db is connected and Server is running on port ${process.env.PORT}`)
        })
    })
    .catch((error) => {
        console.log(error)
    })