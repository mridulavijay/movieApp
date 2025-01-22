import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
const ViewMovies = () => {
    // const rows=[{mName:'Movie1',mdesc:'Movie1',mdirector:'ManiRatnam'},{mName:'Movie2',mdesc:'Movie2',mdirector:'Shankar'}]
  const [data,setData]=useState([]);
  var navigate=useNavigate()
  useEffect(()=>{
    axios.get('/api/movies').then((res)=>{
      console.log(res);
      setData(res.data);
    })
  },[])
  function del_Value(p) {
    axios.delete('/api/removemovie/'+p).then((res)=>{
      alert('Data not there');
      window.location.reload()
    }).catch((error)=>{
      console.log(error)
    })
  }
  function update_value(val) {
    navigate('/add',{state:{val}})
  }
    return (
    <>
  {data.map((item)=>(
    <Card sx={{ minWidth: 275 }}>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {item.movieName}
      </Typography>
      <Typography variant="h5" component="div">
       {item.movieDescription}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {item.movieDirector}
      </Typography>
    
    </CardContent>
    <CardActions>
    <Button variant='contained'onClick={()=>{
      update_value(item)
    }} >Update</Button>
    <Button variant='contained'onClick={()=>{
      del_Value(item._id)
    }} >Delete</Button>
    </CardActions>
  </Card>
  
))}
</> 
)
}

export default ViewMovies