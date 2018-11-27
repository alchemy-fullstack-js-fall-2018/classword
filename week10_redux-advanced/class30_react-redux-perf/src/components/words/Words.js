import React from 'react';

const Words = ({ words, color, backgroundColor, searchTerm, updateColor, updateBackgroundColor, updateSearchTerm }) => {
  const colors = ['black', 'red', 'green', 'yellow', 'white'];
  const options = colors.map(color => <option key={color} value={color}>{color}</option>);
  return (
    <>
      <input value={searchTerm} onChange={updateSearchTerm} />
      <select defaultValue={color} onChange={updateColor}>
        {options}
      </select>
      <select defaultValue={backgroundColor} onChange={updateBackgroundColor}>
        {options}
      </select>
      <ul style={{ color, backgroundColor }}>
        {words.slice(0, 1000).map(word => <li key={word}>{word}</li>)}
      </ul>
    </>
  );
};

export default Words;
