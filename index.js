const express = require('express')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')
const todoRoutes = require('./routes/todos')
const path = require ('path')

const app = express()
const  PORT = process.env.PORT || 3000

const hbs = exphbs.create({
   defaultLayout: 'main',
   extname: 'hbs' 
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))


app.use(todoRoutes)

app.listen(PORT, () => {
    console.log('ПОЕХАЛИ!!!')
})

async function start() {
   try{
       await mongoose.connect('mongodb+srv://alex:happyday@cluster0.qcu7d.mongodb.net/merryalexa', {
           useNewUrlParser: true,
           useUnifiedTopology: true ,
           useFindAndModify: false

       })

   }
   catch (e){
     console.log(e)
   }
}


start()

