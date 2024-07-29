import React from 'react';
import TableRow from './TableRow';
import TableCell from './TableCell';

const Table = ({
  headers,
  rows,
  width = '100%',
  rowBackgroundColor = 'white',
  headerFontSize = '12px',
  cellFontSize = '14px', 
}) => {
  return (
    <table style={{ width: width }}>
      <thead>
        <TableRow backgroundColor="#F7F7F7">
          {headers?.map((header, index) => (
            <TableCell
              key={index}
              padding="12px"
              border="1px solid grey"
              textAlign="left"
              fontSize={headerFontSize} // Pass font size for headers
            >
              {header}
            </TableCell>
          ))}
        </TableRow>
      </thead>
      <tbody>
        {rows?.map((row, rowIndex) => (
          <TableRow key={rowIndex} backgroundColor={rowBackgroundColor}>
            {row?.map((cell, cellIndex) => (
              <TableCell
                key={cellIndex}
                padding="12px"
                border="1px solid grey"
                fontSize={cellFontSize} // Pass font size for cells
              >
                {cell}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
