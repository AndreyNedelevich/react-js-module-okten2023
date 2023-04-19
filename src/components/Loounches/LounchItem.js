import Card from "../Card/Card";




const LounchItem = ({name,year,patch}) => {

    return (
        <Card className="container">
                <div>
                    <h1 className='number'>name: {name}</h1>
                    <h2>year: {year}</h2>
                </div>
                <div className='photo'>
                    <img src={patch} alt="mission_patch"/>
                </div>

        </Card>
    );
};

export default LounchItem;