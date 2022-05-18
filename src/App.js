import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/header/Header';
import Countries from './components/countries/Countries';
import Country from './components/country/Country'
import Region from './components/regions/Region';

function App() {
  return (
    <div>
      <Router>
      <Header/>
      <Route exact path="/">
        <Countries/>
      </Route>
      <Route path="/countries/:name" children={<Country/>}/>

      <Route path="/region/:regionname" children={<Region/>}/>
      </Router>
    </div>

  );
}

export default App;
