import React from 'react';
import { Academy } from './Components/Academy/Academy';
import { Navbar } from './Components/Navbar/Navbar';
import { Explore } from './Components/Explore/Explore';
import { Toggles } from './Components/Toggles/Toggles';
import { Data } from './Components/Data/Data';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Academy />
      <Data />
      <Toggles />
      
    </div>
  );
};

export default App;

