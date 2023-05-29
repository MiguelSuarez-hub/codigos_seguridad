import React from 'react';
import { Loading } from './Loading.js';

class ClassState extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: false,
      loading: true
    };
  }

  // UNSAFE_componentWillMount(){
    // console.log('componentWillMount');
  // }

  // componentDidMount(){
  //   console.log('componentDidMount');
  // }

  componentDidUpdate() {
    if (!!this.state.loading) {
      setTimeout(() =>{
        this.setState({ loading: false });
      },3000);
    }
  }

  render() {
    return (
      <div>
        <h2>Eliminar ClassState</h2>
        <p>Por favor, escribe el código de seguridad para comprobar que quieres eliminar.</p>
        {this.state.error && (<p>Error: el codigo es incorrecto</p>)}
        {this.state.loading && (<Loading/>)}
        <input placeholder='Código de seguridad' />
        <button onClick={()=>this.setState(prevState => ({ loading: true }))}>Comprobar</button>
      </div>
    )
  }
}

export { ClassState };