

function Item({item, onDeleteItems}) {
    return <li key={item.id}><span style={item.packed ? {textDecoration:"line-through"} : {} }>
        {item.quantity} {" "}
        {item.name}
        </span>
        <button onClick={() => onDeleteItems(item.id)} >x</button>
        </li>;
}

export default function List({items, onDeleteItems}) {
    return (
        <>
            <ul className="plist">
                {items.map((item) => (
                    <Item key={item.id} item={item} onDeleteItems={onDeleteItems} />
                ))}
            </ul>
        </>
    );
}