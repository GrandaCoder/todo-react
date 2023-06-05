import { ImRadioChecked , ImRadioUnchecked} from "react-icons/im";

function CompleteIcon({ done, onClick }) {
    const iconSelected = done ? <ImRadioChecked /> : <ImRadioUnchecked />;
    return (
        <span
            className={done ? 'span-icon-done' : 'span-icon-uncompleted'}
            onClick={onClick}>
            {iconSelected}
        </span>
    )
}

export {
    CompleteIcon
}