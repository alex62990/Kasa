import Home from './pages/Home/Home'
import Apropos from './pages/Apropos/Apropos';
import Error from './pages/Error/Error'
import { Route, Routes } from 'react-router-dom';
import './styles/main.scss';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/apropos' element={<Apropos />} />   
        <Route path="*" element={<Error />} />   
      </Routes>
    </div>
  );
}

export default App;
