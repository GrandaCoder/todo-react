
function TodoItem(props) {
    return (
        <li>
            <span>v </span>
            <p>{props.text}</p>
            <span>X</span>
        </li>
    )
}

export {
    TodoItem
}