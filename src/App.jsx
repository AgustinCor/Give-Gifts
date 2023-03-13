import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Comp1 from './components/Comp1'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

function App() {

  const [categories,setCategories] =useState(["Minecraft"]);

    const onAddCategory =(newCategory) =>{
      if (categories.includes(newCategory)) return ;
        setCategories([newCategory,...categories])
    }
  

  return (
    <>
    <h2>Hola</h2>
    <AddCategory 
   // setCategories ={setCategories}
     onNewCategory={e => onAddCategory(e)}
  />
   
    {
      categories.map( (category) =>  (
        <GifGrid key={category}  category={category}/>
      ))
    }

    </>
  )
}

export default App
