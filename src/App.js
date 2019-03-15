import React, { Component } from 'react';
import {Calc} from './Calc';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
         <div style={{position:'relative'}}>
           <p>treść</p>
           <Calc name={'kalkulator'} />  
         </div>  
      </div>
    );
  }
}

export default App;
