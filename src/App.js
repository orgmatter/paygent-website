import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routeProps as ROUTE_PROPS } from './routes/route-props';
import './assets/sass/app-styles.scss';

export default function App() {

  return (
    <div className="app-cover">
      <Router>
        <Routes>
          {
            ROUTE_PROPS.map((routeProp, index) => {
              
              return (
                <Route path={routeProp.path} element={<routeProp.component />} key={index} />
              )
            })
          }
        </Routes>
      </Router>
    </div>
  );
}
