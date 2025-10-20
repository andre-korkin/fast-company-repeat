import QualityList from "./qualityList";
import Bookmark from "./bookmark";


const User = ({_id, name, qualities, profession, completedMeetings, rate, onDelete, bookmark, onToggle}) => {
    return (
        <tr>
            <td>{name}</td>
            <td><QualityList qualities={qualities} /></td>
            <td>{profession.name}</td>
            <td>{completedMeetings}</td>
            <td>{rate}/5</td>
            <td><Bookmark id={_id} status={bookmark} onToggle={onToggle} /></td>
            <td>
                <button className="btn btn-danger" onClick={() => onDelete(_id)}>Delete</button>
            </td>
        </tr>
    )
};


export default User;
