
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import '../styles/App.scss';
import Login from './login';
import Landing from './Landing';

import murder from '../images/cover_muerder.png';
import snatch from '../images/cover_snatch.png';
import intouchables from '../images/cover_intouchables.png';
import hangover from '../images/cover_hangover.png';
import monsters from '../images/cover_monsters.png';

import warrior from '../images/cover_warrior.png';
import billy from '../images/cover_billy.png';
import swiss from '../images/cover_swiss.png';
import titanic from '../images/cover_titanic.png';
import forest from '../images/cover_forest.png';

import memento from '../images/cover_memento.png';
import machinis from '../images/cover_machinis.png';
import leon from '../images/cover_leon.png';
import american from '../images/cover_american.png';
import old from '../images/cover_old.png';
import land from '../images/cover_land.png';

import spider from '../images/cover_spiderman.png';
import harry from '../images/cover_harry.png';
import lord from '../images/cover_lord.png';
import avengers from '../images/cover_avengers.png';


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
    }, 1400)
  };


  return <div className="App">
      <Routes>
        <Route path='/login' element={<Login handleChangeInput={handleChangeInput} validateUser={validateUser}/>}></Route>
        <Route path='/' element={<Landing hovered={hovered} handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave}/>}></Route>
      </Routes>
    </div>;
}

/* PROP-TYPES */

export default App;
