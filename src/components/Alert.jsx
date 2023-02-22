import { useState, useEffect } from 'react';

export function Alert({ message, color = 'red' }) {

  let bgColor, borderColor, textColor;

  switch (color) {
    case 'orange':
      bgColor = '#FFB74D';
      borderColor = '#FF9800';
      textColor = '#F57C00';
      break;
    case 'green':
      bgColor = '#81C784';
      borderColor = '#4CAF50';
      textColor = '#388E3C';
      break;
    default:
      bgColor = '#EF5350';
      borderColor = '#E53935';
      textColor = '#B71C1C';
  }


  return (
    <>

        <div
          className="flex rounded-md bg-white shadow-md p-4 border-l-4 items-center justify-center"
          style={{ backgroundColor: bgColor, borderColor }}
          role="alert"
        >
          <div className="flex">

            <div className="ml-2">
              <div className="text-lg font-medium text-white">{message}</div>
            </div>
          </div>
        </div>
    
    </>
  );
}
