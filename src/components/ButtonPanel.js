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
  let [rowKeys, cellKeys] = [0, 0];
  console.log(rowKeys, cellKeys);

  const rows = arrayOfRows().map((row, index) => {
    const newRow = [];
    cellKeys += 1;
    rowKeys += 1;
    newRow.push(row.map((element, index) => <Button key={index + cellKeys} value={element} />));
    return (
      <div key={index + rowKeys} className="row">
        {newRow}
      </div>
    );
  });
  return (
    <>
      {rows}
    </>
  );
};

export default ButtonPanel;
