import {useState} from 'react';
import {AddCategory, GifGrid} from './components';


export const GitExpertApp = () => {

  const [ categories, setCategories ] = useState(['One Punch']);

  const onAddCategory = ( newCategory ) => {
    //  categories.push(newCategory); //You don't use push 
    if( categories.includes(newCategory)) return
     setCategories([ newCategory, ...categories ]); 
    //setCategories( cat => [ ...cat, 'Valorant' ]); another way to do it
 
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
