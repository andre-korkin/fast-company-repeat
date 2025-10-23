import TableHeader from "./tableHeader";
import UserList from "./userList";
import PropTypes from "prop-types";


const UsersTable = ({usersCrop, onSort, selectedSort, ...rest}) => {
    const columns = {
        name: {iter: 'name', name: 'Имя'},
        qualities: {name: 'Качества'},
        profession: {iter: 'profession.name', name: 'Профессия'},
        complitedMeetings: {iter: 'complitedMeetings', name: 'Встретился, раз'},
        rate: {iter: 'rate', name: 'Оценка'},
        bookmark: {iter: 'bookmark', name: 'Избранное'},
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