import { useDispatch } from "react-redux";
import { actions } from '../store/app'

export default function Todo({data}){
    
    const dispatch = useDispatch();
    const { deleteTodo,toggleStatus } = actions;

    function toggleTaskStatus(id){
        dispatch(toggleStatus({id}));
    }

    function handleDelete(id){
        dispatch(deleteTodo({id}));
    }

    return(
        <div className='border border-slate-500 rounded-lg my-4 p-4 w-[50%] flex justify-around'>
            <p onClick={()=>toggleTaskStatus(data.id)} className={"my-auto" + (data.isCompleted === true ? ' line-through':'') }>{data.todo}</p>
            <button className="bg-red-500 p-2 rounded-lg hover:bg-red-600" onClick={()=>handleDelete(data.id)}>Delete</button>
        </div>
    );
}