import Home from './pages/Home/Home'
import Apropos from './pages/Apropos/Apropos'
import Error from './pages/Error/Error'
import Fiche from './pages/Fiche/Fiche'
import { Route, Routes } from 'react-router-dom'
import './styles/main.scss'

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/apropos' element={<Apropos />} />   
        <Route path='/logement/:id' element={<Fiche />} />
        <Route path="*" element={<Error />} />  
      </Routes>
    </div>
  )
}

export default App
