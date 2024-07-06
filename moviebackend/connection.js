const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@ictakfiles.honye.mongodb.net/moviedb?retryWrites=true&w=majority&appName=ictakfiles').then((res)=>{
    console.log('DB is connected')
}).catch((res)=>{
    console.log('DB not connected')
})