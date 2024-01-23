import {  useDispatch } from "react-redux";
import { actions } from '../store/app'
import { useRef } from "react";

export default function InputForm(){
    
    const dispatch = useDispatch();

    const todo = useRef();

    function handleClick(){
        if(todo.current.value===''){
            alert('Task cannot be empty');
            return;
        }
        else{
            dispatch(actions.addTodo({
                id: (new Date()).getTime(),
                todo: todo.current.value,
                isCompleted: false
            }));
            todo.current.value = "";
        }
    }

    return(
        <div className="mt-16 w-[80%] flex justify-center">
            <input type="text" placeholder="Task..." className="p-2 rounded-lg outline-none text-slate-800 w-[40%]" ref={todo}/>
            <button onClick={handleClick} className="ml-6 p-2 rounded-lg bg-slate-600 hover:bg-slate-500">+ Add Todo</button>
        </div>
    );
}