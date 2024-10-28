import './App.css';
import { useState } from 'react';
import Select from './components/Select';
import Fuente from './components/Fuente';

function App () {
  const [number, setNumber] = useState(2);
  const [hasContinued, setHasContinued] = useState(false); // Estado para controlar el clic en "Continuar"

  // Definir los mensajes según el valor de number
  const getMessage = (number) => {
    switch (number) {
      case '2':
        return "es el porcentaje de población muerta en Gaza desde que empezó la guerra.";
      case '40':
        return "es el porcentaje de fallecidos como consecuencia de la guerra en Gaza que corresponde a niños.";
      case '66':
        return "es el porcentaje de edificios destruidos, incluyendo hospitales, colegios, etc. en Gaza desde que empezó la guerra.";
      case '70':
        return "-64% es el porcentaje de campos de cultivo devastados como consecuencia de la guerra en la franja de Gaza.";
      case '10.000':
        return "es la cifra de desaparecidos desde que empezó la guerra en la franja de Gaza.";
      case '41.788':
        return "es la cifra de muertes hasta octubre de 2024 como consecuencia de la guerra en Gaza.";
      case '22.000':
        return "es el número de objetivos palestinos que han sido atacados por Israel desde noviembre de 2023.";
      default:
        return "es el porcentaje de población muerta en Gaza desde que empezó la guerra.";
    }
  };

  // Array de objetos con títulos y enlaces
  const fuentes = [
    { title: '←  Volver', link: 'https://gazasnotagame.vercel.app/' },
    {
      title: 'Historia del conflicto en Gaza', link: 'https://youtu.be/ulWMA4GZ1Z0?si=r7GHHa3nO1aZ2JhV'
    },
    { title: 'Análisis del conflicto internacional', link: 'https://example.com/analisis-conflicto' },
    { title: 'Apoyo internacional y la guerra en Gaza', link: 'https://example.com/apoyo-internacional-gaza' }
  ];

  // Función para manejar el clic en "Continuar"
  const handleContinue = () => {
    setHasContinued(true);
  };

  return (
    <>
      {/* Primer div, con fade-out cuando hasContinued es true */}
      <div className={`App ${hasContinued ? 'fade-out' : ''}`}>
        <h2>Tira el dado e introduce el número que has sacado</h2>
        <Select number={number} setNumber={setNumber} />
        <button onClick={handleContinue}>Continuar</button>
      </div>

      {/* Segundo div, con fade-in cuando hasContinued es true */}
      <div className={`App fade-in ${hasContinued ? 'visible' : ''}`}>
        <h1>{number}</h1>
        <p style={{ marginTop: '0', marginBottom: '0' }}>{getMessage(number)}</p>

        <div className="info-text">
          <p>En el mundo hay más de 8 grandes conflictos bélicos, con millones de personas sufriendo las consecuencias.</p>
          <p>En Gaza se cometen numerosas violaciones de derechos humanos pero la contienda sigue con apoyo económico y armamentístico de otros países que deberían buscar la paz.</p>
          <p>¿Quieres saber más sobre la guerra de Gaza? <b>Infórmate y denuncia la situación</b></p>
        </div>

        {/* Mapear el array de fuentes y crear un componente Fuente por cada elemento */}
        <div className="fuentes">
          {fuentes.map((fuente, index) => (
            <Fuente key={index} title={fuente.title} link={fuente.link} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
