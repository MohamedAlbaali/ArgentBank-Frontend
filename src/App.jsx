import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './assets/style/App.css'
import Header from './composents/header'
import Footer from './composents/footer'
import Home from './pages/home'
import SignIn from './pages/sign-in'
import User from './pages/user'
function App() {

  return (
    <>
      <Router>
        <Header/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='sign-in' element={<SignIn/>}/>
            <Route path='user' element={<User/>}/>
            <Route/>
          </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
