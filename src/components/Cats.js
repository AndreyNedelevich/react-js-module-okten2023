import {useAppReducer} from "../hooks/useAppReducer";
import Cat from "./Cat";

const Cats = () => {

    const [{cats},dispatch] = useAppReducer(state => state.catDogs)




    return (
        <div>
            {cats.map((cat)=><Cat key={cat.id} cat={cat}/>)}
        </div>
    );
};

export default Cats;