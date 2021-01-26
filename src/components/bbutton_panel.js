import React from 'react';
import Button from './bbutton';

const arrayOfRows = () => [
  ['AC', '+/-', '%', '÷'],
  ['7', '8', '9', 'X'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['0', '.', '='],
];

const ButtonPanel = () => {
  let [rowKeys, cellKeys] = [0, 0];
  const rows = arrayOfRows().map(row => {
    rowKeys += 1;
    const newRow = (row.map(element => {
      cellKeys += 1;
      return <Button key={cellKeys} value={element} />;
    }));
    return (
      <div key={rowKeys} className="row">
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
