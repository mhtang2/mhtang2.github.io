import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import ProjectDetail from './pages/ProjectDetail.jsx'
import Generic from './pages/Generic.jsx'
import ElementTemplates from './pages/ElementTemplates.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects/:slug" element={<ProjectDetail />} />
      <Route path="/generic" element={<Generic />} />
      <Route path="/element-templates" element={<ElementTemplates />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
