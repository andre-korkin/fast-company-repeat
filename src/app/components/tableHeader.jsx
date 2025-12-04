import PropTypes from "prop-types";


const TableHeader = ({onSort, selectedSort, columns}) => {
    const handleSort = (column) => {
        if (selectedSort.path === column) {
            onSort({...selectedSort, order: selectedSort.order === 'asc' ? 'desc' : 'asc'})
        }
        else {
            onSort({path: column, order: 'asc'})
        }
    };

    return ( 
        <thead>
            <tr>
                {Object.keys(columns).map(column => {
                    return (
                        <th key={column} role="button" 
                            onClick={columns[column].path ? () => handleSort(columns[column].path) : undefined} 
                            scope="col">{columns[column].name}</th>
                    )
                })}
                {/* <th role="button" onClick={() => handleSort('name')} scope="col">Имя</th>
                <th role="button" scope="col">Качества</th>
                <th role="button" onClick={() => handleSort('profession.name')} scope="col">Профессия</th>
                <th role="button" onClick={() => handleSort('completedMeetings')} scope="col">Встретился раз</th>
                <th role="button" onClick={() => handleSort('rate')} scope="col">Оценка</th>
                <th role="button" onClick={() => handleSort('bookmark')} scope="col">Избранное</th>
                <th role="button" scope="col"></th> */}
            </tr>
        </thead>
     );
}

TableHeader.propTypes = {
    onSort: PropTypes.func.isRequired,
    currentSort: PropTypes.object.isRequired,
    columns: PropTypes.object.isRequired
}

 
export default TableHeader;