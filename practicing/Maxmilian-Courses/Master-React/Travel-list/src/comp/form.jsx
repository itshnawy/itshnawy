import { useState } from "react";

function Form ({onAddItems}) {

    const [name,setName] = useState('');
    const [quantity,setQuantity] = useState(1);




    function handleSubmit(e) {
    e.preventDefault();
    if (!name) return;

    const newItem = {
        id: Date.now(),
        name,
        quantity,
        packed: false
    }
    onAddItems(newItem);
    setName('');
    setQuantity(1)
    }
    return <>
    <div id="form">
    <h3>What do you need for your trip?</h3>
    <form onSubmit={(e) => handleSubmit(e)} >
    <input type="number" placeholder="1" min="1" max="99" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))}/>
    <input type="text" placeholder="item" value={name} onChange={(e) => setName(e.target.value)}/><br />
    <button>Add Item</button>
    </form>
    </div>
    </>
}

export default Form