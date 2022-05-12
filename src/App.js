import React from 'react';
import logo from './logo.svg';
import './App.css';
import { PublicRoutes }  from './route'
import Layouts from './_layouts';
function App() {
  
  return (
    <>
      <Layouts>
        <PublicRoutes />
      </Layouts>
    </>
  );
}

export default App;
