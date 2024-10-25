
import Todo from './Todo'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { TodoType } from '../types/types'

function TodoList() {
    const { todos } = useSelector((state: RootState) => state.todo)
    return (
        <div style={{ width: "100%", marginTop: "50px" }}>
            {
                todos && todos.map((todo: TodoType) => (
                    <Todo key={todo.id} todoProps={todo} />
                ))
            }
        </div>
    )
}

export default TodoList