import React from 'react';
import SimpsonItem from "./SimpsonItem";
import "./SimpsonList.css";

const SimpsonList = ({arraySimsons}) => {

    const domResult= arraySimsons.map((item,index) => (
        <SimpsonItem
            key={index}
            name={item.name}
            surname={item.surname}
            age={item.age}
            description={item.info}
            img={item.photo}
        />
    ))


    return (
        <div className='wraper'>
            {domResult}
        </div>
    );
};

export default SimpsonList;