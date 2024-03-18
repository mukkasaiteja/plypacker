import { createContext, useContext, useState, useEffect } from 'react';

const Mycontext = createContext();

export function DataProvider({ children }) {
    const [radio,setRadio]=useState();
    const [state,setState]=useState(true);
    const [open,setOpen]=useState(false);
    console.log(radio);
  
    const changeHome=()=>{
      setState(false);
      setOpen(true)
    }


  return (
    <Mycontext.Provider value={{radio,setRadio,changeHome,state,setState,open,setOpen}}>
      {children}
    </Mycontext.Provider>
  );
}

export function useData() {
  return useContext(Mycontext);
}