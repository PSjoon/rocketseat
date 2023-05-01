import { Habit } from "./components/Habit"
import './styles/global.css'

function App() {
  return (
    <div>
      <Habit completed={1}></Habit>
      <Habit completed={2}></Habit>
      <Habit completed={3}></Habit>
    </div>
  )
}

export default App
