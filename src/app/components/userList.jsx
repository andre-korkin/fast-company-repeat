import User from "./user";


const UserList = ({users, onDelete, onToggle}) => {
    return users.map(user => <User {...user} onDelete={onDelete} onToggle={onToggle} key={user._id} />)
};


export default UserList;
