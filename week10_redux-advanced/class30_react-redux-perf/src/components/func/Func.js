import React from 'react';

export default function Func({ title }) {
  console.log('Func', 'Component redered');
  return (
    <h1>Func - {title}</h1>
  );
}
