import React, { useState, useEffect } from 'react';

const SECURITY_CODE = 'paradigma';

const UseState = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState('');

  useEffect(() => {
    if (!!loading) {
      setTimeout(() =>{
        if(value === SECURITY_CODE){
          setLoading(false);
        } else {
          setError(true);
          setLoading(false);
        }       
      },3000);
    }
  }, [loading])
  

  return (
    <div>
        <h2>Eliminar UseState</h2>
        <p>Por favor, escribe el código de seguridad para comprobar que quieres eliminar.</p>
        {error && (<p>Error: el codigo es incorrecto</p>)}
        {loading && (<p>Cargando...</p>)}
        <input placeholder='Código de seguridad' value={value} onChange={(event) => {
          setValue(event.target.value)
        }} />
        <button onClick={()=>{setLoading(true); setError(false)}}>Comprobar</button>
      </div>
  )
}

export { UseState };