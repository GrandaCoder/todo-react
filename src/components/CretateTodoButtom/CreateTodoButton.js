import './CreateTodoButton.css';
function CreateTodoButton() {
    return (
        <button onClick={
            (event) => {
                console.log('clicked');
                console.log(event);
                console.log(event.target);
            }
        }>
            +
        </button>
    )
}

export {
    CreateTodoButton
}