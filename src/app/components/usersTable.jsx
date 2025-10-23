import UserList from "./userList";
import PropTypes from "prop-types";


const UsersTable = ({usersCrop, onSort, currentSort, ...rest}) => {
    const handleSort = (column) => {
        if (currentSort.iter === column) {
            onSort({...currentSort, order: currentSort.order === 'asc' ? 'desc' : 'asc'})
        }
        else {
            onSort({iter: column, order: 'asc'})
        }
    };

    return ( 
        <table className="table">
            <thead>
                <tr>
                    <th role="button" onClick={() => handleSort('name')} scope="col">Имя</th>
                    <th role="button" scope="col">Качества</th>
                    <th role="button" onClick={() => handleSort('profession.name')} scope="col">Профессия</th>
                    <th role="button" onClick={() => handleSort('completedMeetings')} scope="col">Встретился раз</th>
                    <th role="button" onClick={() => handleSort('rate')} scope="col">Оценка</th>
                    <th role="button" onClick={() => handleSort('bookmark')} scope="col">Избранное</th>
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
    onSort: PropTypes.func.isRequired,
    currentSort: PropTypes.object.isRequired
};


export default UsersTable;