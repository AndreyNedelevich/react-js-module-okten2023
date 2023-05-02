import Album from "./Album";


const Albums = ({albums}) => {

    return (
        <div>
            {albums.map((item)=><Album key={item.id} album={item}/>)}
        </div>
    );
};

export default Albums;