import { CompleteIcon } from '../CompleteIcon/CompleteIcon';
import { DeleteIcon } from '../DeleteIcon/DeleteIcon';
import './TodoItem.css';

function TodoItem({ text, done, onComplete, onDelete }) {
    return (
        <li className={done ? 'todoItem--completed' : ''}>
            <CompleteIcon
                done={done}
                onClick={onComplete}
            />
            <p className={done ? 'todoItem-p--completed ' : ''}>{text}</p>   
            <DeleteIcon
                onClick={onDelete}
            />
        </li>
    )
}

export {
    TodoItem
}