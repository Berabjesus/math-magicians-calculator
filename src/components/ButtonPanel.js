import React from 'react';
import Button from './Button';

const arrayOfRows = () => [
  ['AC', '+/-', '%', '÷'],
  ['7', '8', '9', 'X'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['0', '.', '='],
];

const ButtonPanel = () => {
  const rows = [];
  let keyCounter = -1;
  arrayOfRows().map(row => {
    const newRow = [];
    newRow.push(row.map(element => {
      keyCounter += 1;
      return <Button key={keyCounter} value={element} />;
    }));
    rows.push(
      <div key={keyCounter} className="row">
        {newRow}
      </div>,
    );
    return null;
  });
  return (
    <>
      {rows}
    </>
  );
};

export default ButtonPanel;
