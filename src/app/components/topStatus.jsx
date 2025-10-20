const TopStatus = ({count}) => {
    let txt = ' тусанет с тобой сегодня';
    if (count > 1 && count < 5) {
            txt = count + ' человека' + txt;
    }
    else {
        txt = count + ' человек' + txt;
    };

    let res = <h3><span className="badge bg-danger">Никто сегодня с тобой не тусанет</span></h3>;
    if (count > 0) {
        res = <h3><span className="badge bg-warning">{txt}</span></h3>
    };

    return res
};


export default TopStatus;
