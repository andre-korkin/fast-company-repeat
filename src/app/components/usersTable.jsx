import TableHeader from "./tableHeader";
import UserList from "./userList";
import PropTypes from "prop-types";


const UsersTable = ({usersCrop, onSort, selectedSort, ...rest}) => {
    const columns = {
        name: {path: 'name', name: 'Имя'},
        qualities: {name: 'Качества'},
        profession: {path: 'profession.name', name: 'Профессия'},
        complitedMeetings: {path: 'complitedMeetings', name: 'Встретился, раз'},
        rate: {path: 'rate', name: 'Оценка'},
        bookmark: {path: 'bookmark', name: 'Избранное'},
        delete: {}
    };

    return ( 
        <table className="table">
            {<TableHeader {...{onSort, selectedSort, columns}} />}
            {<UserList users={usersCrop} {...rest} />}
        </table>
     );
};

UsersTable.propTypes = {
    usersCrop: PropTypes.array.isRequired,
    onSort: PropTypes.func.isRequired,
    currentSort: PropTypes.object.isRequired
};


export default UsersTable;