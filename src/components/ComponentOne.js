import {count1Actions} from "../redux";
import {useDispatch} from "react-redux";

const ComponentOne = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={()=>dispatch(count1Actions.inc())}>inc</button>
            <button onClick={()=>dispatch(count1Actions.dec())}>dec</button>
            <button onClick={()=>dispatch(count1Actions.reset())}>reset</button>
            {/*count1Actions в ней в виде объекта храняться методы из Reducer. При помощи хука useDispatch() мы отправляем
            один из этих методов в  reducer который меняет состояния внутрихранилище и соответственно оно обновялеться в том компоненте где мы
            его вынимали при помощи useSelector значения меняеться так как происходит перерендер компонента.*/}
        </div>
    );
};

export {ComponentOne};
