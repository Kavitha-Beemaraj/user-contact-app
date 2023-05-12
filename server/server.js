const express= require('express')
const app= express()
const mongoose= require('mongoose')
require('dotenv').config()

mongoose.set('strictQuery', true);
const dbUrl= process.env.DATABASE_URL
const connectionParams={
    useNewUrlParser:true,
    useUnifiedTopology:true
}

mongoose.connect(dbUrl, connectionParams).then(() => console.info("connected to db"))


app.use( express.json() )
app.use(express.urlencoded({ extended: false}))
const usersRouter= require('./routes/users')
app.use('/users', usersRouter)

app.listen(4000, ()=>console.log('Server` Started'))