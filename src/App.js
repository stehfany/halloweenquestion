import React, { useEffect, useState } from 'react';
import logo from './R.gif';
import newLogo from './icegif-854.gif'; 
import correctLogo from './happy.gif';  
import wrongLogo from './0edb44b90b82e348b9233038260323e0.gif';  
import './App.css';

function App() {
  const [showOldLogo, setShowOldLogo] = useState(true);
  const [showRadioButtons, setShowRadioButtons] = useState(false);
  const [resultMessage, setResultMessage] = useState('');
  const [currentLogo, setCurrentLogo] = useState(newLogo);
  const [key, setKey] = useState(0);  

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setShowOldLogo(false);
      setShowRadioButtons(true);
    }, 12000); 

    return () => clearTimeout(timer1);
  }, [key]); 
  const handleOptionChange = (e) => {
    const value = e.target.value;
    if (value === '6') {
      setCurrentLogo(correctLogo);
      setResultMessage('Você acertou');
    } else {
      setCurrentLogo(wrongLogo);
      setResultMessage('Você errou');
    }
    setShowRadioButtons(false); 
  };

  const handleRetry = () => {
    setShowOldLogo(true);
    setShowRadioButtons(false);
    setResultMessage('');
    setCurrentLogo(newLogo);
    setKey(prevKey => prevKey + 1); 
  };

  return (
    <div className="App" key={key}>
      <header className="App-header">
        <img src={showOldLogo ? logo : currentLogo} className="App-logo" alt="logo" />
        {showOldLogo && (
          <div>
            <p style={{ fontFamily: 'Creepster, sans-serif' }}>Welcome to the freak show</p>
            <p style={{ fontFamily: 'Creepster, sans-serif' }}>Vamos Jogar?</p>
          </div>
        )}
        {showRadioButtons && (
          <div className="radio-buttons">
            <p>Desafio: quantas bexigas o palhaço está segurando?</p>
            <label>
              <input type="radio" name="options" value="3" onChange={handleOptionChange} /> 3
            </label>
            <label>
              <input type="radio" name="options" value="4" onChange={handleOptionChange} /> 4
            </label>
            <label>
              <input type="radio" name="options" value="5" onChange={handleOptionChange} /> 5
            </label>
            <label>
              <input type="radio" name="options" value="6" onChange={handleOptionChange} /> 6
            </label>
          </div>
        )}
        {resultMessage && (
          <div className="result-message">
            <p>{resultMessage}</p>
            <button className="btn btn-dark" onClick={handleRetry}>Tentar Novamente</button>
          </div>
        )}
      
    
      </header>
    </div>
  );
}

export default App;
