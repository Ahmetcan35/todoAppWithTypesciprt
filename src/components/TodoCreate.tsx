import { useState } from "react";
import { useDispatch } from "react-redux"
import { TodoType } from "../types/types";
import { createTodo } from "../redux/todoSlice";


function todoCreate() {
    const dispatch = useDispatch();
    const [newTodo, setNewTodo] = useState<string>("");

    const handleCreateTodo = () => {
        if (!newTodo) {
            alert("Todo Giriniz.");
            return;
        }

        const payload: TodoType = {
            id: Math.floor(Math.random() * 9999999),
            content: newTodo
        }
        dispatch(createTodo(payload));
        setNewTodo("");
    }
    return (
        <div className='todo-create'>
            <input
                value={newTodo} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value)} type="text" placeholder='Todo giriniz' className='todo-input' />
            <button
                className='todo-create-button' onClick={handleCreateTodo}>ToDo Oluştur</button>
        </div>
    )
}

export default todoCreate