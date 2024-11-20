import AllCards from './components/AllCards.jsx';
import Context from './components/Context.js';
import { useState } from 'react';
import './App.css'

function App() {
  let [display, setDisplay] = useState('none');

  return(
  <>
    <Context.Provider value={[display, setDisplay]}>
      <AllCards />
    </Context.Provider>
  </>
  )

}

export default App
