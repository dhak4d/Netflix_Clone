import './App.css';
import { Home } from './Components/Home';
import { Routes, Route } from 'react-router-dom'
import { NextStep } from './Components/NextStep';
import { NextStep1 } from './Components/NextStep1';
import { SignIn } from './Components/SignIn';


function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="signin" element={<SignIn />} />
        <Route exact path="nextStep" element={<NextStep />} />
        <Route exact path="nextStep1" element={<NextStep1 />} />
      </Routes>

    </>
  );
}

export default App;
