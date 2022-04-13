import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import LandingPage from '../pages/LandingPage';
import LoginPage from '../pages/LoginPage';
import MedicalRecords from '../pages/MedicalRecords';
import MedicalSchedule from '../pages/MedicalSchedule'

const AppRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/medical_record' element={<MedicalRecords />} />
        <Route path='/medical_schedule' element={<MedicalSchedule />} />
    </Routes>
  )
}

export default AppRouter