import React, { useState } from 'react';

function Square({ color, onClick }) {
  return (
    <div
      style={{
        width: '50px',
        height: '50px',
        backgroundColor: color,
        margin: '10px',
      }}
      onClick={onClick}
    />
  );
}

function Grid() {
  const [colors, setColors] = useState(
    Array(50).fill('#00ff00')
  );

  function handleClick(index) {
    const newColors = [...colors];
    let color = '#FF0000'
    newColors[index] =  color;
    setColors(newColors);
  }

  return (
    <div className='container-fluid' style={{ display: 'grid', gridTemplateColumns: 'repeat(10, 80px)' }}>
      {colors.map((color, index) => (
        <Square key={index} color={color} onClick={() => handleClick(index)} />
      ))}
    </div>
  );
}

export default Grid;
