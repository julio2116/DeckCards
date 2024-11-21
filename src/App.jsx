import AllCards from './components/AllCards.jsx';
import Context from './components/Context.js';
import { useState } from 'react';
import './App.css'

function App() {
  let [varGlobal, setVar] = useState({display: 'none'});

  return(
  <>
    <Context.Provider value={[varGlobal, setVar]}>
      <AllCards />
    </Context.Provider>
  </>
  )

}

export default App
