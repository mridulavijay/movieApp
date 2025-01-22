import { Box, Button, TextField } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const AddMovies = () => {
  const [form,setForm]=useState({
    movieName:'',
    movieDescription:'',
    movieImage:'',
    movieDirector:''
  })
  const location=useLocation()
  function valueFetch(e) {
    setForm({...form,[e.target.name]:e.target.value})
  }
  function sendData() {
    if (location.state!=null) {
      axios.put('/api/movieedit/'+location.state.val._id,form).then((res)=>{
        alert('Data updated');
        
      }).catch((error)=>{
        console.log(error);
      })
    } else {
      axios.post('/api/addMovies',form).then((res)=>{
        alert('Data added')
      }).catch((error)=>{
        console.log(error)
      })
    }
    
  }
  useEffect(()=>{
    if(location.state!=null){
      setForm({...form,
        movieName:location.state.val.movieName,
        movieDescription:location.state.val.movieDescription,
    movieImage:location.state.val.movieImage,
    movieDirector:location.state.val.movieDirector
      })
    }
  },[])
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <div>
        <TextField
        
          id="standard-required"
          label="MovieName"
          variant="standard"
          name='movieName'
          value={form.movieName}
          onChange={valueFetch}
        />
        </div>
        <div>
        <TextField
  
          id="standard-required"
          label="Movie Description"
          variant="standard"
          value={form.movieDescription}
          name='movieDescription'
          onChange={valueFetch}
        />
        </div>
        <div>
        <TextField
        
          id="standard-required"
          label="Movie Image"
          variant="standard"
          name='movieImage'
          value={form.movieImage}
          onChange={valueFetch}
        />
        </div>
        <div>
        <TextField
     
          id="standard-required"
          label="Movie Director"
          variant="standard"
          name='movieDirector'
          value={form.movieDirector}
          onChange={valueFetch}
        />
        </div>
        <div>
            <Button variant='contained' onClick={sendData}>ADD</Button>
        </div>
    </Box>
  )
}

export default AddMovies