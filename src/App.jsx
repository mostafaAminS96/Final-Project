
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import { Route, Routes } from 'react-router-dom'
import RegisterForm from './Components/Register/Register'
import LoginForm from './Components/Login/Login'
// import Nav from './Components/Nav'
// import Home from './Components/Home'


function App() {
  

  return (
    <>
    <Routes>
      <Route  path='/Register' element={<RegisterForm />}></Route>
      <Route  path='/Login' element={<LoginForm />}></Route>
    </Routes>
    
    
    </>
  )
}

export default App
