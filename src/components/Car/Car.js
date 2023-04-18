const Car = ({car,serCarForUpdate,dalateCar}) => {
    const {id, brand, price, year} = car;
    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={()=>serCarForUpdate(car)}>update</button>
        {/*    При нажати на кнопку конкретного Car в форму будет занесенны его данные. Данный функционал реализовуеться  при помощи передачи в данный компонент
        функции сеттер и вызове ее и передачи в качестве аргумента тот объект car на котором был произведен клик.
        */}
            <button onClick={()=>dalateCar(car.id)}>dalate</button>
        </div>
    );
};

export {Car};
