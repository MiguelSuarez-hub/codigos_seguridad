import React, { useState } from "react";

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

  const onConfirm = () => {
    setState({ 
      ...state,
      error: false,
      loading: false,
      confirmed: true,
    });
  }

  const onError = () => {
    setState({ 
      ...state,
      error: true,
      loading: false,
    });
  }

  const onCheck = () => {
    setState({ 
      ...state,
      loading: true,
    });
  }

  const onWrite = (newValue) => {
    setState({ ...state, value: newValue });
  }

  const onDelete = () => {
    setState({ ...state, deleted: true });
  }

  const onReset = () => {
    setState({ ...state, confirmed: false, deleted:false, value: '' });
  }

  React.useEffect(() => {
    if (!!state.loading) {
      setTimeout(() => {
        if (state.value === SECURITY_CODE) {
          onConfirm();
          // setLoading(false);
        } else {
          onError();
          // setError(true);
          // setLoading(false);
        }
      }, 1500);
    }
  }, [state.loading]);


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
            onWrite(event.target.value);
          }}
        />
        <button onClick={() => {onCheck();}}>
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
            {onDelete();}
          }
        >
          Si, estoy seguro
        </button>
        <button
          onClick={() =>
            // setLoading(true)
            {onReset();}
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
            {onReset();}
          }
        >
          Volver atras
        </button>
      </>
    );
  }
};

export { UseState };
