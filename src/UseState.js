import React, { useState, useEffect } from 'react';

const UseState = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!!loading) {
      setTimeout(() =>{
        setLoading(false);
      },3000);
    }
  }, [loading])
  

  return (
    <div>
        <h2>Eliminar UseState</h2>
        <p>Por favor, escribe el código de seguridad para comprobar que quieres eliminar.</p>
        {error && (<p>Error: el codigo es incorrecto</p>)}
        {loading && (<p>Cargando</p>)}
        <input placeholder='Código de seguridad' />
        <button onClick={()=>setLoading(true)}>Comprobar</button>
      </div>
  )
}

export { UseState };