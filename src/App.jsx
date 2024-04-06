import React from 'react';
import Header from './Components/Header/Header';
import Home from './Pages/Home';
import Footer from './Components/Footer/Footer';
import Copyright from './Components/Copyright';
import Social from './Components/Social';
const App = () => {
  return (
    <>
      <Social />
      <Header/>
      <Home/>
      <Footer/>
      <Copyright/>
    </>
  );
}

export default App;
