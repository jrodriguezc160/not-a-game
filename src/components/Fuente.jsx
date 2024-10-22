import React from 'react';
import '../App.css';

/* Componente para albergar enlaces */
export default function Fuente ({ title, link }) {

  return (
    <div className='fuente'>
      <a href={link}>{title}</a>
    </div>
  );
}
