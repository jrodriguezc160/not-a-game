import React from 'react';
import '../App.css';

export default function Fuente ({ title, link }) {

  return (
    <div className='fuente'>
      <a href={link}>{title}</a>
    </div>
  );
}
