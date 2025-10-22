import UserList from "./userList";
import PropTypes from "prop-types";


const UsersTable = ({usersCrop, onSort, ...rest}) => {
    return ( 
        <table className="table">
            <thead>
                <tr>
                    <th role="button" onClick={() => onSort('name')} scope="col">Имя</th>
                    <th role="button" scope="col">Качества</th>
                    <th role="button" onClick={() => onSort('profession.name')} scope="col">Профессия</th>
                    <th role="button" onClick={() => onSort('completedMeetings')} scope="col">Встретился раз</th>
                    <th role="button" onClick={() => onSort('rate')} scope="col">Оценка</th>
                    <th role="button" onClick={() => onSort('bookmark')} scope="col">Избранное</th>
                    <th role="button" scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {<UserList users={usersCrop} {...rest} />}
            </tbody>
        </table>
     );
};

UsersTable.propTypes = {
    usersCrop: PropTypes.array.isRequired,
    onSort: PropTypes.func.isRequired
};


export default UsersTable;