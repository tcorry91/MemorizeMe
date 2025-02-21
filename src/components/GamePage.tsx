// src/components/GamePage.tsx
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import styles from './GamePage.module.css';

const colorOptions = ['red', 'blue', 'green', 'yellow'];

const generateGrid = (gridSize: number) => {
  const totalCells = gridSize * gridSize;
  return Array.from({ length: totalCells }, (_, i) => ({
    id: i,
    color: colorOptions[Math.floor(Math.random() * colorOptions.length)],
    revealed: true, // Initially, colors are shown
  }));
};

const GamePage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const difficulty = searchParams.get('difficulty');

  let gridSize = 4;
  if (difficulty === 'normal') gridSize = 5;
  else if (difficulty === 'hard') gridSize = 6;

  // Use the generateGrid function and store it in state.
  const [grid, setGrid] = React.useState(() => generateGrid(gridSize));

  // For now, we're just showing the grid with permanent colors.
  // Later, you'll add logic to change revealed to false (fade to grey) after 3 seconds.

  return (
    <div className={styles.container}>
      <h1>Game Page</h1>
      <p>Difficulty: {difficulty}</p>
      <div
        className={styles.grid}
        style={{ gridTemplateColumns: `repeat(${gridSize}, 1fr)` }}
      >
        {grid.map((cell) => (
          <div
            key={cell.id}
            className={styles.cell}
            style={{ background: cell.revealed ? cell.color : 'grey' }}
          >
            {/* Optionally show the cell number or color for debugging */}
            {cell.revealed ? cell.color : ''}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GamePage;
