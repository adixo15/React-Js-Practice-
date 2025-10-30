import { useState } from "react";

export default function useLocalStorage(key,initialValue){
    const[value,setvalue]=useState(()=>{
        const storedValue=localStorage.getItem(key)
        return storedValue?JSON.parse(storedValue):initialValue
    })

    const setStoredvalue=(newValue)=>{
        setvalue(newValue)
        localStorage.setItem(key,JSON.stringify(newValue))
    }
    
  return [value, setStoredvalue];
}