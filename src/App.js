import React from 'react';
import Utama from './Components/Utama'
import {Link} from 'react-router-dom';


class App extends React.Component {
  render() {
    return(
      <div> <hr />
      <Link to="/daftar" className="nav-link">Daftar</Link> 
      <a className="nav-link" href="daftar">Daftar<span className="sr-only"></span></a>
      <p><Utama/></p>
      </div>
    )
  }
}

export default App;