
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import '../styles/App.scss';
import Login from './login';
import Landing from './Landing';


function App() {

const [user, setuser] = useState ({
  username: '',
  password: ''
})


const handleChangeInput = (inputName, inputValue) =>{
  setuser({ ...user, [inputName]: inputValue });
} 

const validateUser = () =>{
  console.log(user);
}

  return <div className="App">
      <Routes>
        <Route path='/login' element={<Login handleChangeInput={handleChangeInput} validateUser={validateUser}/>}></Route>
        <Route path='/' element={<Landing/>}></Route>
      </Routes>
    </div>;
}

/* PROP-TYPES */

export default App;
