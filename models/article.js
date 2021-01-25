const mongoose = require('mongoose')


const articleSchema = new mongoose.Schema({
    title:{
        type: String,
        require:true
    },
    description: {
        type: String
    },
    markdown : {
        type:String,
        require: true
    },  
})


module.exports = mongoose.model('Article', articleSchema)