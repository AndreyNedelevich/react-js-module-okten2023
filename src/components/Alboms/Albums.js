import Album from "./Album";


const Albums = ({albums}) => {

    return (
        <div className='block'>
            {albums.map((item)=><Album key={item.id} album={item}/>)}
        </div>
    );
};

export default Albums;