const Bookmark = ({id, status, onToggle}) => {
    const bg = status ? 'bi bi-star-fill' : 'bi bi-star';
    return <i className={bg} onClick={() => onToggle(id)}></i>
};


export default Bookmark;
