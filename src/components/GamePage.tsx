// src/components/GamePage.tsx
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import styles from './GamePage.module.css';

const GamePage: React.FC = () => {
  // Get query parameters from the URL
  const [searchParams] = useSearchParams();
  const difficulty = searchParams.get('difficulty');

  // Determine grid size based on difficulty:
  // For "easy" use 4x4, for "normal" use 5x5, for "hard" use 6x6.
  let gridSize = 4; // default to easy
  if (difficulty === 'normal') gridSize = 5;
  else if (difficulty === 'hard') gridSize = 6;

  // Create an array representing the grid cells
  const totalCells = gridSize * gridSize;
  const cells = Array.from({ length: totalCells }, (_, i) => i);

  return (
    <div className={styles.container}>
      <h1>Game Page</h1>
      <p>Difficulty: {difficulty}</p>
      <div
        className={styles.grid}
        style={{ gridTemplateColumns: `repeat(${gridSize}, 1fr)` }}
      >
        {cells.map((cell) => (
          <div key={cell} className={styles.cell}>
            {/* For now we can show the cell number or leave it blank */}
            {cell + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GamePage;
