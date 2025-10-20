import PropTypes from "prop-types";


const GroupList = ({items, selectedItem, onItemSelect, valueProp='_id', contentProp='name'}) => {
    if (Array.isArray(items)) {
        return <ul className="list-group">{
            (items).map(item => 
                <li className={"list-group-item" + (item === selectedItem ? ' active' : '')}
                    key={item[valueProp]} onClick={() => onItemSelect(item)} role="button">{item[contentProp]}
                </li>)
        }</ul>
    }
    else {
        return <ul className="list-group">{
            Object.values(items).map(item => 
                <li className={"list-group-item" + (item === selectedItem ? ' active' : '')}
                    key={item[valueProp]} onClick={() => onItemSelect(item)} role="button">{item[contentProp]}
                </li>)
        }</ul>
    }
};

GroupList.propTypes = {
    items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
    valueProp: PropTypes.string.isRequired,
    contentProp: PropTypes.string.isRequired,
    selectedItem: PropTypes.object,
    onItemSelect: PropTypes.func
};

 
export default GroupList;