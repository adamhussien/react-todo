
import "./index.css"
import "./index"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import { list } from "postcss";

export default function App() {
  const [items, setitems] = useState([])
  function additemes(item){
setitems((items) => [...items, item])
  }
  function deleteItems(index){
    setitems((items) => items.filter((_, i) => i !== index))
  }
    return (
     <div className="container">
        <Header />
     <Form  additemes={additemes}/>
     <Parentlist items={items} deleteItems={deleteItems}/>
     </div>
    )
  } 
  function Header(){
    return (
        <h1 className="">todo app</h1>
    )
  }
  function Form({additemes}){
  const [input, setinputvalue] = useState("")
  function handlesubmit(e){
    e.preventDefault()
    if(!input) return

    additemes(input);
    setinputvalue('')
  }
    
return (
    <form className="form" onClick={handlesubmit}>
 <input placeholder="add item...." value={input}
 onChange={(e) => setinputvalue(e.target.value)}
 />
 <button type="submit">ADD</button>
    </form>
)

  }
  function Parentlist({items, deleteItems}){
    return(
        <ul>
          {items.map((item, index) =>(
           < List   key={index} item={item} deleteItems={() => deleteItems(index)} />
          ))
          }
        </ul>
    )
  }
  function List ({item, deleteItems}){
return(
    <li>
      <span>{item}</span>
      <button onClick={deleteItems}><FontAwesomeIcon icon={faTrash} /></button>
    </li>
)
  }