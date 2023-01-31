const Item = ({ id, name, number, deleteItem }) => {
    return (
        <li>{ name } {number} <button onClick={() => deleteItem(id)}>Delete</button></li>
    )
}

export default Item;