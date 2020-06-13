import React from 'react';
import styled from 'styled-components';
import Homepage from './pages/homepage';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import SearchResults from './pages/search-results';
import MyNavbar from './components/navbar';
import Suggest from './components/suggest';
import Search from './components/search';
import Feedback from './components/feedback/feedback';
import Fetch from './actions/fetch';

const Main = styled.div`
  font-family: 'Poppins', sans-serif;
`

function App() {

  return (
    <Main>
      <BrowserRouter>
        <MyNavbar />
        <Feedback />
        <Fetch />
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/search" component={Search} />
          <Route path="/search-results" component={SearchResults} />
          <Route path="/suggest" component={Suggest} />
        </Switch>

      </BrowserRouter>
    </Main>
  );
}

export default App;
