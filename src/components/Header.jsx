import { useEffect, useState } from "react"
import IconMoon from "./icons/IconMoon"
import IconSun from "./icons/IconSun";

//para que a la hora de actualizar no se actualize el color 
const inicialStateDarkMode = localStorage.getItem('theme')=== 'dark';

const Header = () => { 
const [darkMode, setDarkMode]=useState(inicialStateDarkMode);
//lo que hace el cambio
useEffect(()=>{
 if(darkMode){
  document.documentElement.classList.add('dark');
  localStorage.setItem('theme', 'dark');
  
 }else{
  document.documentElement.classList.remove('dark');
  localStorage.setItem('theme', 'light');
 }


}, [darkMode])

    return(
        <header className="container mx-auto px-4 pt-8 md:max-w-x1">
        <div className="flex justify-between">
          <h1 className="uppercase text-white text-4xl font-semibold tracking-[0.3em]">
            Todo
          </h1>
          <button onClick={()=>setDarkMode(!darkMode)}>
            {/* lo que hace que cambie el sol */}
            {
              darkMode ? <IconSun/> : <IconMoon/>
            }
          </button>
        </div>
      </header>
    )
 }
 export default Header