import React from 'react';
import '../App.css';

/* Componente para albergar enlaces */
export default function Fuente ({ title, link }) {

  return (
    <a href={link} className='fuente'>{title}</a>
  );
}
