import Quality from "./quality";


const QualityList = ({qualities}) => {
    return qualities.map(quality => <Quality quality={quality} key={quality._id} />);
};


export default QualityList;
