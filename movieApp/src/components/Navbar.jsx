import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
       
        <Typography style={{textAlign:'left'}} variant="h6" component="div" sx={{ flexGrow: 1 }}>
          MovieApp
        </Typography>
     <Link to={'/'}>  <Button color="inherit">ViewMovie</Button></Link> 
     <Link to={'/add'}>   <Button color="inherit">AddMovie</Button></Link>
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default Navbar