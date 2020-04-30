import React, { useState } from 'react';
import styled from 'styled-components';
import Homepage from './pages/homepage';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

const Main = styled.div`
font-family: 'Poppins', sans-serif;
`

function App() {

  return (
    <Main>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Homepage} />
        </Switch>
      </BrowserRouter>
    </Main>
  );
}

export default App;
