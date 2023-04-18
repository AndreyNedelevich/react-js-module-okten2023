import {useForm} from "react-hook-form";
import {carService} from "../../services/car.service";
import {useEffect} from "react";
import {joiResolver} from '@hookform/resolvers/joi';
//Импортируем из библиотеки @hookform/resolvers/joi объект для передачи его в useForm параметором
import {carValidator} from "../../validators/car.validator";

const CarForm = ({setAllCars, carForUpdate,serCarForUpdate}) => {

    const {register, handleSubmit, reset,
        formState: {errors, isValid}, setValue} = useForm({
        mode: 'all',
        resolver: joiResolver(carValidator)
    });
    // Хук UseForm() можно использовать для валидации, получения данных, отображения ошибок.
    // Она возвращает объект из которого при помощи деструктуризации получить:
    //1)register поможе зарегистрировать для инпута его типы и атрибуты.
    //2)handleSubmit метод при помощи которого получаем в виде объекта введенные данные.
    //3) reset метод для очистки формы.
    //4)formState в нем есть объект с полями метод errors (показывает ошибки), isValid дает булин значения валидности формы.
    //5)setValue функцию из хука useForm используем для знанесение данных в инпут при ее вызове и передачи в него параметров.

    //В сам хук useForm передаем в него параметры {1)mode: 'all',2)resolver: joiResolver(carValidator)}
    //1)Первый параметр поле mode в которое  в качестве value можно передать в какой момент будет происходить валидация.(по дефолту стоит onSubmit)
    // onBlur(забрали курсор с инпута),onChange(сразу же при первом вводе данных в инпут), onTuched (если инпут был тронут)
    //2) Вторым параметром передаем resolver а в него в качестве метода(функция)   передаем экспортируемый из библиоттеки функцию joiResolve
    // В данный метод joiResolve передаем в качестве аргумента объект валидации из файла **carValidator**

    useEffect(() => {
        //Если в carForUpdate згачение true То будт вызванны методы setValue для кажного поля инпута
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand, {shouldValidate: true})
            // ДЛя setValue параметры:
            // 1) Название поля куда засетать данные
            //2) Непосредственно данные которые должны быть положенны в поле инпута (берем из переменной состояния (объект carForUpdate с полями) )
            //3) В опциях передаем  shouldValidate значения  true, которое должно сделать форму валидной и сделать кнопку отправки активной.
            setValue('price', carForUpdate.price, {shouldValidate: true})
            setValue('year', carForUpdate.year, {shouldValidate: true})
        }
    }, [carForUpdate])
    //В массив зависимости useEffect включаем саму переменную и при ее изменении код внутри useEffect старботает и форма с инпутов заполниться этими данными..

    const save = async (car) => {

        const {data} = await carService.create(car);
        //При помощи нашего сервиса carService вызываем метод create и в качестве аргумента передаем новый car (объект) и данный car записываетьсяв базу данных.
        setAllCars(prev => !prev)
        //Как только новая машина успешно записанна в API. Вызываеться функция сетер  setAllCars (переданная из компонента Cars)
        // и меняет при помощи вызава в аргументе  call beck и изменения переменной состояния на противоположное. В даном примере это
        // будет тригером для перезапуска useEffect в Cars
        reset()
        //Очищаем инпуты.
    }

    //  ******************************  Д/З   *************************************
    const update = async (car) => {
        const {data}=await carService.updateById(carForUpdate.id,car)
        console.log(data);
        setAllCars(prev => !prev)
        reset()
        serCarForUpdate(null)
    }
//************************************************************************************

    return (
    //     <form onSubmit={handleSubmit(carForUpdate ? update : save)}>
    //         {/*Если есть данные в переменной carForUpdate то при клике на отправку формы будет вызываться функция  update,
    //         если в перемнной folse значение то будт вызвана функция save*/}
    //
    //         {/*В событие отправки формы передаем метод handleSubmit из хука useForm и в качестве аргумента передаем
    //           одну из обычных функций которая будет вызвана в зависимости от булин значения carForUpdate */}
    //         <input type="text" placeholder={'brand'} {...register('brand', {
    //             //В инпут передаем объект и в этот объект при помощи  деструктуризации будем возвращать то что отдает функция
    //             //register, в нем обезательно даем имя!!!
    //             //   Вторым аргументом в register педаем объект опций.
    //             pattern: {
    //                 value: /^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/,
    //                 message: 'Бранд має складатись тільки з літер мін 1 макс 20 літер'
    //             //Здесь передаем по ключу  pattern:
    //             // В поле value   валидация при помощи регулярных выражений
    //            // в поле message текст сообщения если введенная информация не валидна.
    //             },
    //
    //             required: {value: true, message: 'required'}
    //         })}/>
    //         {errors.brand && <span>{errors.brand.message}</span>}
    //         {/*Если в объекте errors в поле brand(имя инпута) есть информация по ошибки (true) выводим текст ошибки из того же поля(имя инпута) текст берем из message   */}
    //         <input type="text" placeholder={'price'} {...register('price', {
    //             valueAsNumber: true,
    //             //Вторым аргументом в register передаем объект опций. В нем есть поля valueAsNumber  (информаци из инпута будет числового типа),
    //             // также есть valueAsData есть и другие.
    //             min: {value: 0, message: 'min 0'},
    //             max: {value: 1000000, message: 'max 1000000'},
    //             // Поля min и max указываем в value максимальное значение и минисальное значение которое должно быть введенно в инпут
    //             //В случаи не валидности в поле message прописываем текст ошибки который далее получаем при не валидности.
    //             required: true
    //             // Делает инпут обезательным для заполнения.
    //         })}/>
    //         {errors.price && <span>{errors.price.message}</span>}
    //         <input type="text" placeholder={'year'} {...register('year', {
    //             valueAsNumber: true,
    //             min: {value: 1990, message: 'min 1990'},
    //             max: {value: new Date().getFullYear(), message: 'current year'},
    //             // Для определения максимального года обращаемся к классу new Date() через его метод getFullYear() получаем текущий год он и будет максимальным
    //
    //             required: true
    //         })}/>
    //         {errors.year && <span>{errors.year.message}</span>}
    //         <button disabled={!isValid}>{carForUpdate ? 'Update' : 'Create'}</button>
    //     {/* Если форма не валидна то кнопка будет тоключена при помощи атрибута disabled */}
    //     {/* Изменяем название кнопки в зависимости от булин значения carForUpdate     */}
    //     </form>

        //Второй вариант с валидацией при помощи JOI. Передана в качестве параметра в useForm(). Код внизу стал чище.
        <form onSubmit={handleSubmit(carForUpdate ? update : save)}>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            {errors.brand && <span>{errors.brand.message}</span>}
            <input type="text" placeholder={'price'} {...register('price')}/>
            {errors.price && <span>{errors.price.message}</span>}
            <input type="text" placeholder={'year'} {...register('year')}/>
            {errors.year && <span>{errors.year.message}</span>}
            <button disabled={!isValid}>{carForUpdate ? 'Update' : 'Create'}</button>
        </form>
    );
};

export {CarForm};
