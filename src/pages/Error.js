import React from 'react';

const Error = (error) => {

    let content = 'Вы перешли на несуществующую старницу';

    if (error) {
        content = 'Что то пошло не так!!!'
    }


    return (
        <div>
            <h1 style={{color: "red", textAlign: "center"}}>{content}</h1>
        </div>
    );
};

export default Error;

