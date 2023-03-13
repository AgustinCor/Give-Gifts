import React, { useState } from 'react';

const AddCategory = ({ onNewCategory ,/* setCategories*/}) => {
  
   const [inputValue,setInputValue] =useState("");

   const onSubmit =(e)=>{
      e.preventDefault();
    //  if (inputValue.trim().length <= 1) return ;
    //  setCategories(categories =>[...categories,inputValue])
      onNewCategory (inputValue.trim());
      setInputValue("");
   }

    return (
       <form onSubmit={(e) => onSubmit(e)}>
        <input 
        type="text"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
         />
       </form>
    );
};

export default AddCategory;
