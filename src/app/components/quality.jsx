const Quality = ({quality}) => {
    const bgQuality = 'badge rounded-pill m-1 bg-' + quality.color;
    return <span className={bgQuality}>{quality.name}</span>
};


export default Quality;
