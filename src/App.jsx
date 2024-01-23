import { useEffect } from "react";
import InputForm from "./components/InputForm";
import TodoWrapper from "./components/TodoWrapper";
import { useDispatch } from "react-redux";
import { actions } from './store/app'

export default function App(){
  
  const dispatch = useDispatch();

  useEffect(()=>{
    if(localStorage.getItem('todo').length>0){
      dispatch(actions.replaceTodo(JSON.parse(localStorage.getItem('todo'))));
    }
  },[])
  
  return(
    <div className="hide-scroll bg-slate-800 w-screen h-screen text-slate-100 flex flex-col items-center overflow-scroll">
      <h2 className="text-4xl p-3">Todo-App</h2>
      <InputForm />
      <TodoWrapper />
    </div>
  );
}