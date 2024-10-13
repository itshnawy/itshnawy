import './App.css'
import Header from './comp/header'
import Form from './comp/form'
import List from './comp/plist'
import Stats from './comp/stats'
import { useState } from "react";

function App() {
  const [items,setItems] = useState([]);
  function handleItems(item) {
    setItems(items => [...items,item]) 
   }
   function handleDeleteItems(id) {
    setItems(items => items.filter(item => item.id !== id)) 
   }

  return (
    <>
      <Header/>
      <Form onAddItems={handleItems}/>
      <List items={items} onDeleteItems={handleDeleteItems}/>
      <Stats/>
    </>
  )
}

export default App
