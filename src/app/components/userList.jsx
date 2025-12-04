import User from "./user";


const UserList = ({users, onDelete, onToggle}) => {
    return (
        <tbody>
            {users.map(user => <User {...user} onDelete={onDelete} onToggle={onToggle} key={user._id} />)}
        </tbody>
    )
};


export default UserList;
