import { Route, Routes } from 'react-router-dom';
import './App.css';
import Auth from './components/auth/Auth';
import Footer from './components/footer/Footer';
import Nav from './components/nav/Nav';
import { useEffect, useState } from 'react';
import DisplayMain from './components/display/DisplayMain';
import Logout from './components/auth/logout/Logout';

function App() {

  const [ sessionToken, setSessionToken ] = useState('')
  console.log('Token:', sessionToken)

  const updateToken = newToken => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
  }

  useEffect(() => {
    if(localStorage.getItem('token')) {
      setSessionToken(localStorage.getItem('token'))
    }
  }, [])


  return (
    <div className="App">

      <Nav />
      <Routes>
        <Route
        path='/'
        element={<Auth updateToken={updateToken}/>}>          
        </Route>
        <Route
        path='/room'
        element={<DisplayMain token={sessionToken}/>}>          
        </Route>
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
