import PropTypes from "prop-types";


const TableBody = ({data, columns}) => {
    return (
        <tbody>
            {
                data.map(item => {
                    return (
                        <tr>
                            {Object.keys(columns).map(column => {
                                return (
                                    <td>
                                        {item.columns[column].path}
                                    </td>
                                )
                            })}
                        </tr>
                    )
                })
            }
        </tbody>
    );
};

TableBody.propTypes = {
    data: PropTypes.array.isRequired,
    columns: PropTypes.object.isRequired
};
 
export default TableBody;