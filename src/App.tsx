import './App.css'
import NavBarra from './components/NavBarra.tsx'
import MainSection from './components/MainSection.tsx'
import { Routes, Route } from 'react-router-dom'
import ArticlePreview from './components/ArticlePreview.tsx'

function App() {

  return (
    <>
    <NavBarra />
    <Routes>
<Route path='/' element={<MainSection />} />
<Route path='/:id' element={<ArticlePreview />} />
    </Routes>
    </>
  )
}

export default App
