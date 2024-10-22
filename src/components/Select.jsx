import React from 'react';
import '../App.css';

export default function Select ({ number, setNumber }) {
  const handleChange = (event) => {
    setNumber(event.target.value);
  };

  return (
    <>
      <select
        name="number-picker"
        id="number-picker"
        className="number-picker"
        value={number}
        onChange={handleChange}
      >
        <option value="2">2</option>
        <option value="40">40</option>
        <option value="66">66</option>
        <option value="70">70</option>
        <option value="10.000">10.000</option>
        <option value="41.788">41.788</option>
        <option value="22.000">22.000</option>
      </select>
    </>
  );
}