import UserList from "./userList";
import PropTypes from "prop-types";


const UsersTable = ({usersCrop, ...rest}) => {
    return ( 
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Имя</th>
                    <th scope="col">Качества</th>
                    <th scope="col">Профессия</th>
                    <th scope="col">Встретился раз</th>
                    <th scope="col">Оценка</th>
                    <th scope="col">Избранное</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {<UserList users={usersCrop} {...rest} />}
            </tbody>
        </table>
     );
};

UsersTable.propTypes = {
    usersCrop: PropTypes.array.isRequired
}


export default UsersTable;