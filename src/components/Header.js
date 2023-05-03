import {useSelector} from "react-redux";

const Header = () => {
    const {count1} = useSelector(state => state.count1);
    const {count2} = useSelector(state => state.count2);

    // При помощи хука useSelector получаем данные из хранилища и подписываем компонент на обновления этих данных.
    return (
        <div>
            <div>Count1: {count1}</div>
            <div>Count2: {count2}</div>
        </div>
    );
};

export {Header};
