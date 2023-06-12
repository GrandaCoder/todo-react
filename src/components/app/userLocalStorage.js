import React, { useState } from "react";

// custom hook usamos la palabra use por nomemclatura 
function useLocalStorage(itemName, initialValue) {

    const [loading, setloading] = useState(true)
    const [error, setError] = useState(false)
    const [item, setItem] = useState(initialValue)

    const completeItem = (id) => {
      const newItem = [...item];
      const todoIndex = newItem.findIndex(todo => todo.id === id);
      newItem[todoIndex].done = !newItem[todoIndex].done;
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
    }
  
    const deleteItem = (id) => {
      const newItem = [...item];
      const todoIndex = newItem.findIndex(todo => todo.id === id);
      newItem.splice(todoIndex, 1);
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
    }
  
    React.useEffect(() => {
        setTimeout(() => {
            try {
                const respuestaStorage =  JSON.parse(localStorage.getItem(itemName))
                if(respuestaStorage === null){
                  //  localStorage.setItem(itemName, JSON.stringify(initialValue));
                }else{
                    setItem(respuestaStorage);
                }
                setloading(false)
            } catch (error) {
                setloading(false)
                setError(true)
            }
        }, 3000);
    },[]) 
    
    //[itemName, initialValue]

    return {
      item,
      completeItem,
      deleteItem,
      loading,
      error
    }
  }
  
  export{
      useLocalStorage
  }