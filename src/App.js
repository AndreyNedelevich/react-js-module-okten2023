import {Button} from "./Button/Button";
import {useContext} from "react";
import {Context} from "./index";
import {First} from "./First";

const App = () => {
    const context = useContext(Context);
    // При помщи хука useContext() и передачи в его аргумент переменную в которую при созлании был помощен сам контекст
    //получаем доступ к данным контекста.

    context.users = ['max', 'kokos', 'kesha']
    // ПРимер наполнения данными контекста. Мы не можем что то ему переприсвоить. Мы работае с ним в качестве ссылки.
    //Например  добавляем переменной ключ users  и присваиваем  ему массив.
    return (
        <div>
            {/*<Button bgColor={'red'} styles={{color:'blue'}} height={'50px'} id={1234}>*/}
            {/*    save*/}
            {/*</Button>*/}
            {/*<Button bgColor={'black'} styles={{color:'snow'}}>update</Button>*/}
            <First/>
        </div>
    );
};

export default App;
