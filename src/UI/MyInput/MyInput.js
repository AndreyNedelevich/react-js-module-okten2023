import React from "react";


const MyInput = (props) => {
    console.log(props);
    return (
        <React.Fragment>
            <label htmlFor={props.id}>{props.label}</label>
            <input   {...props} />
        </React.Fragment>
    );
}


export default MyInput;