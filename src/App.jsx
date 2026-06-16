import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/landing-page/LandingPage'
import LandingHeader from './components/landingpage/LandingHeader'
import LandingHeroSec from './components/landingpage/LandingHeroSec'
import LandingServiceSec from './components/landingpage/LandingServiceSec'
import Howitworks from './components/landingpage/Howitworks'
import UserPage from './pages/dashboard/user/UserPage'
import WorkerPage from './pages/dashboard/worker/WorkerPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path="/userpage" element= {<UserPage/>} />
        <Route path="/workerpage" element= {<WorkerPage/>} />
      </Routes>
    </>
  )
}

export default App
