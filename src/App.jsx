import { HashRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import ItemQuiz from './components/ItemQuiz'
import EmblemQuiz from './pages/EmblemQuiz'

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/item-quiz" element={<ItemQuiz />} />
          <Route path="/emblem-quiz" element={<EmblemQuiz />} />
        </Routes>
      </div>
    </HashRouter>
  )
}

export default App
