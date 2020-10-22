import React from 'react';
import './App.scss';
import Header from './components/Header/Header'
import Intro from './components/Intro/Intro'
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <div className='container'>
      <Header></Header>
        <Intro></Intro>

      </div>
        
      <Main></Main>
      <Footer/>
      
    </div>
  );
}

export default App;
