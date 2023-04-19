import React from 'react';
import LounchItem from "./LounchItem";

const LounchList = (props) => {
    const sortLaunches=props.arraylaunches.filter(item=>item.launch_year!=='2020')

    return (
        <div className='wraper'>
            {sortLaunches.map((item,index) => (
                <LounchItem
                    key={index}
                     name= {item.mission_name}
                     year= {item.launch_year}
                    patch={item.links.mission_patch}
                />
            ))}
        </div>
    );
};

export default LounchList