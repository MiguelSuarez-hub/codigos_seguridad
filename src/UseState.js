import React, { useState, useEffect } from "react";

const SECURITY_CODE = "paradigma";

const UseState = () => {
  const [state, setState] = useState({
    value: "",
    error: false,
    loading: false,
    deleted: false,
    confirmed: false,
  });

  // const [error, setError] = useState(false);
  // const [loading, setLoading] = useState(false);
  // const [value, setValue] = useState('');

  useEffect(() => {
    if (!!state.loading) {
      setTimeout(() => {
        if (state.value === SECURITY_CODE) {
          setState({ ...state, loading: false, confirmed: true });
          // setLoading(false);
        } else {
          setState({ ...state, error: true, loading: false });
          // setError(true);
          // setLoading(false);
        }
      }, 3000);
    }
  }, [ state.loading ]);

  if (!state.deleted && !state.confirmed) {
    return (
      
      <div>
        <h2>Eliminar UseState</h2>
        <p>
          Por favor, escribe el código de seguridad para comprobar que quieres
          eliminar.
        </p>
        {state.error && !state.loading && <p>Error: el codigo es incorrecto</p>}
        {state.loading && <p>Cargando...</p>}
        <input
          placeholder="Código de seguridad"
          value={state.value}
          onChange={(event) => {
            // setValue(event.target.value)
            setState({ ...state, value: event.target.value });
          }}
        />
        <button
          onClick={() =>
            // setLoading(true)
            setState({ ...state, loading: true, error: false })
          }
        >
          Comprobar
        </button>
      </div>
    );
  } else if (!!state.confirmed && !state.deleted) {
    return (
      <>
        <p>Estas seguro que deseas eliminar el UseState?</p>
        <button
          onClick={() =>
            setState({ ...state, deleted: true })
          }
        >
          Si, estoy seguro
        </button>
        <button
          onClick={() =>
            // setLoading(true)
            setState({ ...state, confirmed: false, value: '' })
          }
        >
          No, volver atras
        </button>
      </>
    );
  } else {
    return (
      <>
        <p>Eliminado con exito</p>
        <button
          onClick={() =>
            // setLoading(true)
            setState({ ...state, confirmed: false, deleted:false, value: '' })
          }
        >
          Volver atras
        </button>
      </>
    );
  }
};

export { UseState };
