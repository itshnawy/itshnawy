const initItems = [
    {
        id: 1,
        name: "item1",
        quantity: 2,
        packed: true
    },
    {
        id: 2,
        name: "item2",
        quantity: 2,
        packed: false
    }
];

function Item({item}) {
    return <li key={item.id}><span style={item.packed ? {textDecoration:"line-through"} : {} }>
        {item.quantity} {" "}
        {item.name}
        </span>
        <button >x</button>
        </li>;
}

export default function List() {
    return (
        <>
            <ul className="plist">
                {initItems.map((item) => (
                    <Item key={item.id} item={item} />
                ))}
            </ul>
        </>
    );
}