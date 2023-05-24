
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import '../styles/App.scss';
import Login from './login';
import Landing from './Landing';
import Detail from './Detail';

function App() {

const [user, setuser] = useState ({
  username: '',
  password: ''
})
const [hovered, setHovered] = useState(false);


const handleChangeInput = (inputName, inputValue) =>{
  setuser({ ...user, [inputName]: inputValue });
} 

const validateUser = () =>{
  console.log(user);
}

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
     setTimeout(() => {
      setHovered(false);
    }, 2000)
  };


  return <div className="App">
      <Routes>
        <Route path='/login' element={<Login handleChangeInput={handleChangeInput} validateUser={validateUser}/>}></Route>
        <Route path='/' element={<Landing hovered={hovered} handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave}/>}></Route>
        <Route path='/detail' element={<Detail hovered={hovered} handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave}/>}></Route>
      </Routes>
    </div>;
}

/* PROP-TYPES */

export default App;
