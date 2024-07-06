const express=require('express');
const app=new express();
const cors=require('cors');
const PORT=4000;
const movieModel=require('./model/MovieData');
require('./connection');
app.use(express.json());
app.use(cors());
app.get('/movies',async(req,res)=>{
    try {
        const data= await movieModel.find();
        res.send(data)
    } catch (error) {
        console.log(error)
    }
})

app.post('/addMovies',async(req,res)=>{
    try {
        
            var item=req.body;
            const datasave=new movieModel(item);
            const saveddata= await datasave.save();
            res.send('Post successful');
       
    } catch (error) {
        console.log(error)
    }
})
app.put('/movieedit/:id',async (req,res)=>{
    try {
     const data= await movieModel.findByIdAndUpdate(req.params.id,req.body);
     res.send('Updated successfully')
    } catch (error) {
     console.log(error)
    }
 })
 app.delete('/removemovie/:id',async(req,res)=>{
     try {
         await movieModel.findByIdAndDelete(req.params.id);
     res.send('Deleted successfully')
     } catch (error) {
         console.log(error)
     }
     
 })
app.listen(PORT,()=>{
    console.log('Server is running on PORT 4000')
})