import Navbar from './components/Navbar'
import TaskManager from './components/TaskManager'
import { ThemeProvider } from './constants/ThemeContext'
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <main id="app-content">
        <TaskManager />
      </main>
    </ThemeProvider>
  )
}

export default App