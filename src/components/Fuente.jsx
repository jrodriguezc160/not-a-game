import React from 'react';
import '../App.css';

/* Componente para albergar enlaces */
export default function Fuente ({ title, link }) {

  return (
    <button className='fuente'>
      <a href={link}>{title}</a>
    </button>
  );
}
