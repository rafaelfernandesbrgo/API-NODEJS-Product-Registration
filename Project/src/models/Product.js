
//imports
const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')


//schema creation
const ProductSchema = new mongoose.Schema({
    title:{
        type: String, // type
        required: true 
    },
    description:{
        type: String,  
        required: true 
    },
    url:{
        type: String,  
        required: true 
    },
    CreateddAt:{
        type: Date,  
        default: Date.now 
    }

});


//allows results to be paginated
ProductSchema.plugin(mongoosePaginate)

mongoose.model('Product', ProductSchema )
