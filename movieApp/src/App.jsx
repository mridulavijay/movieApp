import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ViewMovies from './components/ViewMovies'
import AddMovies from './components/AddMovies'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path={'/'} element={<ViewMovies/>}> </Route>
      <Route path={'/add'} element={<AddMovies/>}></Route>
    </Routes>
    </>
  )
}

export default App
