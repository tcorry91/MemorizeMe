import React from 'react';
// import { useNavigate } from 'react-router-dom';
import styles from './WelcomeScreen.module.css';


const WelcomeScreen: React.FC = () => {
  // const navigate = useNavigate();

  const handleSelectDifficulty = (difficulty: string) => {
    console.log(`Selected difficulty: ${difficulty}`);
    // navigate(`/game?difficulty=${difficulty}`);
  };


  return (
    <div className={styles.container}>
      <h1>Welcome to MemorizeMe</h1>
      <p>Please select a difficulty level:</p>
      <div className={styles.buttonGroup}>
        <button onClick={() => handleSelectDifficulty('easy')}>Easy</button>
        <button onClick={() => handleSelectDifficulty('normal')}>Normal</button>
        <button onClick={() => handleSelectDifficulty('hard')}>Hard</button>
      </div>
    </div>
  );
};

export default WelcomeScreen;