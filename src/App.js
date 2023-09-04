import Home from './pages/Home/Home'
import { Route, Routes } from 'react-router-dom';
import './styles/main.scss';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />       
      </Routes>
    </div>
  );
}

export default App;
