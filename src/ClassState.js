import React from 'react';

class ClassState extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: false,
    };
  }
  render() {
    return (
      <div>
        <h2>Eliminar ClassState</h2>
        <p>Por favor, escribe el código de seguridad para comprobar que quieres eliminar.</p>
        {this.state.error && (<p>Error: el codigo es incorrecto</p>)}
        <input placeholder='Código de seguridad' />
        <button onClick={()=>this.setState(prevState => ({ error: !prevState.error}))}>Comprobar</button>
      </div>
    )
  }
}

export { ClassState };