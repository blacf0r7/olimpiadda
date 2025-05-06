import { useState, useEffect } from 'react';

const GuessNumberGame = () => {
  const [number, setNumber] = useState(0);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [attempts, setAttempts] = useState(0);

  
  useEffect(() => {
    setNumber(Math.floor(Math.random() * 100) + 1);
  }, []);

  const handleCheck = () => {
    const userGuess = Number(guess);
    setAttempts(attempts + 1);

    if (userGuess === number) {
      setMessage(`Угадал! Попыток: ${attempts + 1}`);
    } else if (userGuess < number) {
      setMessage('Больше');
    } else {
      setMessage('Меньше');
    }
  };

  const handleRestart = () => {
    setNumber(Math.floor(Math.random() * 100) + 1);
    setGuess('');
    setMessage('');
    setAttempts(0);
  };
  return (
    <div>
      <h1>Угадай число от 1 до 100</h1>
      
      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
      />
      
      <button onClick={handleCheck}>Проверить</button>
      
      {message && <p>{message}</p>}
      <p>Попыток: {attempts}</p>
      
      {message.includes('Угадал') && (
        <button onClick={handleRestart}>Сыграть ещё раз</button>
      )}
    </div>
  );

};

export default GuessNumberGame;







































