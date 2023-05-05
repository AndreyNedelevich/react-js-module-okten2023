import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {useEffect} from "react";

import {carActions} from "../redux";
import {carService} from "../services";

const CarForm = () => {
    const dispatch = useDispatch();
    const {carForUpdate} = useSelector(state => state.cars);
    const {reset, register, handleSubmit, setValue} = useForm();

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand)
            setValue('price', carForUpdate.price)
            setValue('year', carForUpdate.year)
        }
    }, [carForUpdate, setValue])

    const save = async (car) => {
        // await carService.create(car)
        // dispatch(carActions.changeTrigger())
      //До использования thunkApi мы вызвали два действия пераое аснхронное, второе передавали action внутрь Reducer.

      //Теперь при использовании   thunkApi  всю всю выолняеться в одно методе.
        await dispatch(carActions.create({car}))
        reset()

    }

    const update = async (car) => {
        await dispatch(carActions.update({id: carForUpdate.id, car}))
        reset()
    }

    return (
        <form onSubmit={handleSubmit(carForUpdate ? update : save)}>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            <input type="text" placeholder={'price'} {...register('price')}/>
            <input type="text" placeholder={'year'} {...register('year')}/>
            <button>{carForUpdate ? 'Update' : 'Save'}</button>
        </form>
    );
};

export {CarForm};
