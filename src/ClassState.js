import React from 'react';
import { Loading } from './Loading.js';

const SECURITY_CODE = 'paradigma';

class ClassState extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      error: false,
      loading: false
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
        if (this.state.value === SECURITY_CODE) {
          this.setState({ loading: false})
        } else {
          this.setState({ error: true, loading: false });
        }
        
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
        <input placeholder='Código de seguridad' value={this.state.value} onChange={(event) => {this.setState(prevState => ({ value: event.target.value }))}} />
        <button onClick={()=>this.setState(prevState => ({ error: false, loading: true }))}>Comprobar</button>
      </div>
    )
  }
}

export { ClassState };