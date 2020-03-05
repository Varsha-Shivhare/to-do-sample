import React, {useState} from 'react';
import './App.css';


function App() {

  const[inputText, setInputText] = useState('');
  const[items, setaddItems] = useState([]);

  function handleTextChange(e){
    setInputText(e.target.value)
    e.preventDefault();
  }
  function handleClick(e){
    items.push({
      label: inputText,
      isDone: false});
    setaddItems(items);
    setInputText('');
    e.preventDefault();
  }
//enable isdone true for task done if the task is done the leave it strikedout and changes cannot be made on strikedout task
  function handleDone(e,index){    
     // Creating copy of existing data
      const tempItems = [...items];

      // modify item as done
      tempItems[index].isDone = true;

      setaddItems(tempItems);
    
    //e.preventDefault()
  }

  return (
   <div className="main">
     <div className="container">
       <h1>ToDo App</h1>
       <div className="inputWrapper">
          <input className="inputBox" type="text" placeholder="Add item" onChange={handleTextChange} value={inputText}/>
          <button className="btnStyle" onClick={handleClick} disabled={!inputText}>Add</button>
       </div>
      <div className="todoList">
        {items.map((item, index) => <div className={item.isDone?"displayItem completed":"displayItem"}><input checked={item.isDone} value={item.isDone} type="checkbox" onChange={(e)=>handleDone(e,index)} /><label>{item.label}</label></div>)}
      </div>
   </div>
   </div>
  );
}

export default App;
