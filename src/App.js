import { useState, useEffect } from 'react';
import './App.css';
import Programs from './components/Programs';
import Scratch from './components/Scratch';
// import Results from './components/Results';
import Header from './components/Header';


function App() {
  const [programs, setPrograms] = useState(null)

  useEffect(() => {
    fetch("http://localhost:5000/programs")
      .then(res => {
        return res.json()
      })
      .then(data => {
        setPrograms(data)
      })
  }, [])

  return (
    <main>
      {programs && <Header programs={programs} />}
    </main>
  );
}

export default App;

// {programs && <Header programs={programs} />}
// {programs && <Programs programs={programs} />}