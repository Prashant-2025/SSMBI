import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import AsbestosMillBoardPage from './pages/AsbestosMillBoardPage'
import AboutPage from './pages/AboutPage'
import ClientsPage from './pages/ClientsPage'
import ContactPage from './pages/ContactPage'
import './App.css'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="products/asbestos-mill-board" element={<AsbestosMillBoardPage />} />
          <Route path="clients" element={<ClientsPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

