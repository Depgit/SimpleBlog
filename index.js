const express = require('express')
const mongoose = require('mongoose')
const Article = require('./models/article')
const articleRouter = require('./routes/articles')
const methodOverride = require('method-override')
const app = express()
const {MONGOURI} = require('./config/keys')

mongoose.connect(process.env.MONGOURI || MONGOURI,{
     useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true
})

app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))


app.get('/', async (req,res) =>{
    const articles = await Article.find().sort({
        createdAt: 'desc'
    })
    res.render('articles/index', { articles: articles })
})

app.use('/articles',articleRouter)

// if(process.env.NODE_ENV=="production"){

// }

app.listen(process.env.PORT || 5000)