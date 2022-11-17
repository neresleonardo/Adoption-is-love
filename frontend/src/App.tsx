import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import Routes from './router';
import Layout from './components/Layout';

function App() {
  return (
    <div className="App">
      <GlobalStyles/>
      {/* <Routes/> */}
      <Layout/>
    </div>
  );
}

export default App;
