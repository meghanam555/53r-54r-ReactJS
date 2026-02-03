import { useState } from "react";


export function useCounter(){
    const [count, setCount] = useState(0)

    const increment = ()=>{setCount(count+10)};
    const decrement = ()=>{setCount(count-10)};

    return {count, increment, decrement}
}