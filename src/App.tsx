
import './App.css'
import TodoCreate from './components/todoCreate'
import TodoList from './components/TodoList'

function App() {

  return (
    <div className='app'>
      <div className='main'>
        <TodoCreate />
        <TodoList />
      </div>
    </div>
  )
}

export default App
