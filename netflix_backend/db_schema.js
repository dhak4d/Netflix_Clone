const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email:String,
    password:String,
},
{
    collection:'netflix_data'
}
)

mongoose.model('netflix_data', userSchema)