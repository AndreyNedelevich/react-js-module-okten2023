import React, {useEffect} from 'react';
// import {carsActions} from "../reducers/carReducer";
// import {useDispatch, useSelector} from "react-redux";
// import {carService} from "../service/car.service";
// import {useFetching} from "../hooks/useFetching";
// import Loader from "../components/Loader/Loader";
// import Error from "./Error";
// import Cars from "../components/Cars/Cars";

const CarsPage = () => {

    // const state=useSelector(state => state)
    // const dispatch=useDispatch()
    //
    // console.log(state);
    //
    // const [fetch, isLoading, ErrorMessage] = useFetching(
    //     async () => {
    //         const response = await carService.getAll();
    //         dispatch(carsActions.setAllCars(response.data));
    //     }
    // );
    //
    //
    // useEffect(()=>{
    //     fetch()
    // },[state.trigger])



    return (
            <div style={{margin: 15}} >
                <h1>CARS</h1>
                {/*{isLoading ?*/}
                {/*    <Loader/>*/}
                {/*    :*/}
                {/*    <React.Fragment>*/}
                {/*        {ErrorMessage ?*/}
                {/*            <Error error={ErrorMessage}/> :*/}
                {/*            <Cars cars={state.carsArr}/>*/}
                {/*        }*/}
                {/*    </React.Fragment>*/}
                {/*}*/}
            </div>
    );
};

export default CarsPage;