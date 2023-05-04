import {useForm} from "react-hook-form";
import {carValidator} from "../../validators/car.validators";

import { useEffect} from 'react';
import {joiResolver} from '@hookform/resolvers/joi';
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import {carService} from "../../service/car.service";
import {useFetching} from "../../hooks/useFetching";
import {carsActions} from "../../reducers/carReducer";


const CarForm = () => {

   const {carForUpdate}= useSelector(state => state.cars)
    const dispatch = useDispatch();


    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm({
        mode: 'all',
        resolver: joiResolver(carValidator)
    });

    useEffect(() => {
        if (carForUpdate) {
            if (carForUpdate) {
                setValue('brand', carForUpdate.brand)
                setValue('price', carForUpdate.price)
                setValue('year', carForUpdate.year)
            }
        }

    }, [carForUpdate, setValue])


    const [fetch, ] = useFetching(
        async (car) => {
            await carService.create(car);
            dispatch(carsActions.trigger())
        }
    );


    const [fetchUpdateCar, ] = useFetching(
        async (id,car) => {
            await carService.updateByIdCar(id,car);
            dispatch(carsActions.trigger())
            dispatch(carsActions.updateCar(null))
            reset()
        }
    );

    const save = async (car) => {
       fetch(car)
    };

    const update= async (car) => {
        fetchUpdateCar(carForUpdate.id,car)

    };

    return (
        <div className='block'>
            <form style={{margin: 25}} onSubmit={handleSubmit(carForUpdate ? update : save)}>
                <input type="text" placeholder={'brand'} {...register('brand')}/>
                {errors.brand && <span>{errors.brand.message}</span>}
                <input type="text" placeholder={'price'} {...register('price')}/>
                {errors.price && <span>{errors.price.message}</span>}
                <input type="text" placeholder={'year'} {...register('year')}/>
                {errors.year && <span>{errors.year.message}</span>}
                <button disabled={!isValid}>{carForUpdate ? 'Update' : 'Create'}</button>
            </form>
        </div>
    );
};

export default CarForm