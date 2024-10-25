import React, { useState } from 'react'
import { CiCircleRemove } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import { FaCheck } from "react-icons/fa6";
import { TodoType } from '../types/types';
import { useDispatch } from 'react-redux';
import { removeTodoById, updateTodo } from '../redux/todoSlice';

interface TodoProps {
    todoProps: TodoType
}
function Todo({ todoProps }: TodoProps) {
    const { id, content } = todoProps;
    const dispatch = useDispatch();
    const [editable, setEditable] = useState<boolean>(false);
    const [newTodo, setNewTodo] = useState<string>(content);

    const handleRemoveTodo = () => {
        dispatch(removeTodoById(id))
    }
    const handeUpdateTodo = () => {
        const payload: TodoType = {
            id: id,
            content: newTodo
        }
        dispatch(updateTodo(payload));
        setEditable(false);
    }
    return (
        <div className='todo-main'>
            <div>
                {
                    editable ? <input type="text" value={newTodo} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value)} className='todo-input' style={{ height: "15px" }} /> : content
                }
            </div>
            <div style={{
                display: "flex"
                , flexDirection: "row"
            }}><div><CiCircleRemove className='todo-icons' onClick={handleRemoveTodo}></CiCircleRemove></div>
                <div>
                    {
                        editable ? <FaCheck className='todo-icons' onClick={handeUpdateTodo} /> : <CiEdit className='todo-icons' onClick={() => setEditable(true)} />

                    }
                </div></div>

        </div>
    )
}

export default Todo