import { Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/LandingPage'
import ReumeGenerator from './pages/ReumeGenerator'
import UserForm from './pages/UserForm'
import History from './pages/History'
import Pnf from './pages/Pnf'
import Header from './components/Header'
import Footer from './components/Footer'
import ViewResume from './pages/ViewResume'



function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/resume' element={<ReumeGenerator/>} />
        <Route path='/form' element={<UserForm/>} />
        <Route path='/history' element={<History/>} />
        {/* dynamic url - prefix with column , ex - :id */}
        <Route path='/resume/:id/view' element={<ViewResume/>} />
        <Route path='/*' element={<Pnf/>} />
      </Routes> 
    <Footer/>      
    </>
  )
}

export default App
