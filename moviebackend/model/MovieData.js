const mongoose=require('mongoose');
const movieSchema=mongoose.Schema({
    movieName:String,
    movieDescription:String,
    movieImage:String,
    movieDirector:String
})
const MovieData=mongoose.model('movie',movieSchema);
module.exports=MovieData