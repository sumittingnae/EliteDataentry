//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/home';
function App() {
  return (
    <BrowserRouter>
     <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}></Route>

      </Routes>
      
    </div>
    </BrowserRouter>
   
  );
}

export default App;
