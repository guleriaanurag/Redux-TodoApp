import { useSelector } from "react-redux";
import Todo from "./Todo";

export default function TodoWrapper(){
    
    const todos = useSelector((state)=>state)
    
    return(
        <div className='mt-16 border border-slate-100 rounded-xl w-[90%] h-auto p-5 flex flex-col items-center'>
            {todos.map((todo)=>(
                <Todo key={todo.id} data={todo}/>
            ))}
        </div>
    );
}