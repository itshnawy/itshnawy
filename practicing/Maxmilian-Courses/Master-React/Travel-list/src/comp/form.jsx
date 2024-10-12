function Form () {
    function handleSubmit(e) {
    e.preventDefault();
    }
    return <>
    <div id="form">
    <h3>What do you need for your trip?</h3>
    <form onSubmit={(e) => handleSubmit(e)} >
    <input type="number" placeholder="1" min="1" max="99"/>
    <input type="text" placeholder="item" /><br />
    <button>Add Item</button>
    </form>
    </div>
    </>
}

export default Form