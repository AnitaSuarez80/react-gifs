import {useState} from 'react';
import {AddCategory, GifGrid} from './components';


export const GifApp = () => {

  const [ categories, setCategories ] = useState(['Bob Esponja']);

  const onAddCategory = ( newCategory ) => {
    if( categories.includes(newCategory)) return
     setCategories([ newCategory, ...categories ]); 
 
  }
  return (
    <>
      {/* Título */}
      <h1>GifExpertApp</h1>

      {/* Input */}
      <AddCategory  
        onNewCategory={ onAddCategory }
      // setCategories= { setCategories }
      />
       
      {/* Listado de items(gif) */}
      {/* <button onClick={onAddCategory}>Agregar</button> */}
      <ol>
        {
         categories.map(( category ) => (
           <GifGrid 
              key={ category }
              category={ category }/>
         ))
        }
        {/* <li>ABC</li> */}
      </ol> 

    </>
  )
}
