import { React } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import HomeLayout from './components/home/HomeLayout'
import SinglePage from './components/singlePage/SinglePage'

function App() {

  return (
    <>
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />} />
        <Route path="/movie/:id" element={<SinglePage />} />
      </Routes>
    </HashRouter>
    </>
  )
}

export default App
