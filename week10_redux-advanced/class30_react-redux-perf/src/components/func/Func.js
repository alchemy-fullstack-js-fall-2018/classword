import React, { memo } from 'react';

export default memo(function Func({ title }) {
  console.log('Func', 'Component rendered');
  return (
    <h1>Func - {title}</h1>
  );
});
