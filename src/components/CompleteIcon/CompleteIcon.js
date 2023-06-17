import { MdOutlineCheckCircleOutline , MdRadioButtonUnchecked} from "react-icons/md";
import './CompleteIcon.css';


function CompleteIcon({ done, onClick }) {
    const iconSelected = done ? <MdOutlineCheckCircleOutline /> : <MdRadioButtonUnchecked />;
    return (
        <span
            className= {'span-icon ' + (done ? 'span-icon-done' : 'span-icon-uncompleted')}
            onClick={onClick}>
            {iconSelected}
        </span>
    )
}

export {
    CompleteIcon
}