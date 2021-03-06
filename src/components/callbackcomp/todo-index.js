import { useState,useCallback } from "react";
import Todos from './todo';

const App =()=>{
    const [count, setCount] = useState(0);
    const [todos,setTodes] = useState([]);

    const increment = ()=>{
        setCount ((c)=>c+1);
    }
    const addTodo =useCallback(()=>{
        setTodes((t)=> [...t,"New Tode"]);
    },[todos]);
    return(
        <>
        <Todos todos ={todos} addTodo ={addTodo }/>
        <hr />
        <div>
            Count :{count}
            <button onClick ={increment}>+</button>
        </div>
        </>
    )
}

export default App;