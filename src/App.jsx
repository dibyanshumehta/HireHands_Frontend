import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import UserLogin from './components/auth/user/UserLogin'
import UserRegistration from './components/auth/user/UserRegistration'
import WorkerLogin from './components/auth/worker/WorkerLogin'
import LandingPage from './pages/landing-page/LandingPage'
import LandingHeader from './components/landingpage/LandingHeader'
import LandingHeroSec from './components/landingpage/LandingHeroSec'
import LandingServiceSec from './components/landingpage/LandingServiceSec'
import Howitworks from './components/landingpage/Howitworks'
import WorkerRegistration from './components/auth/worker/WorkerRegistration'
import UserPage from './pages/dashboard/user/UserPage'
import WorkerPage from './pages/dashboard/worker/WorkerPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path="/userlogin" element= {<UserLogin/>} />
        <Route path="/userregistration" element= {<UserRegistration/>} />
        <Route path="/workerlogin" element= {<WorkerLogin/>} />
        <Route path="/workerregistration" element= {<WorkerRegistration/>} />
        <Route path="/userpage" element= {<UserPage/>} />
        <Route path="/workerpage" element= {<WorkerPage/>} />
      </Routes>
    </>
  )
}

export default App
