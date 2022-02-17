import './App.css';
import { Routes, Route, useNavigate, useLocation, useParams } from "react-router-dom";
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Logout from './components/Logout/Logout';


function App() {

  let location = useLocation();
  let navigate = useNavigate();
  let background = location.state && location.state.background;

  function closeModal() {  
    console.log('modal');    
    navigate(-1)
  }

  return (
    <>
     <Header/> 
     <Routes location={background || location}>
      <Route path='/login' element={ <Login />}/>
      <Route path='/register' element={ <Register />}/>
      <Route path='/logout' element={ <Logout />}/>
    </Routes>  

    {background && 
      <Routes>
        <Route path='/register' element={ <Register closeModal={closeModal}/>}/>
        <Route path='/login' element={<Login closeModal={closeModal}/>} />
      </Routes>}
    </>
  );
}

export default App;
