import { useState } from 'react'
import './App.css'
import CharacterList from './CharacterList'
import { Route, Routes } from 'react-router-dom'
import Comics from './Comics'
import Home from './Home'
import CharacterDetails from './CharacterDetails'
import NavLink from './Nav-link'
import NotFound from './NotFound'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavLink />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Comics" element={<Comics />} />
      <Route path="/BrowseCharacters" element={<CharacterList />} />
      <Route path="/CharacterDetails/:id" element={<CharacterDetails />} />
      <Route elemment={<NotFound />} />
    </Routes>
      
    </>
  )
}

export default App


