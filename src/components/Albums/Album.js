import React from 'react';

const Album = ({album}) => {

    return (
        <div>
            <h4>{album.id}) {album.title}</h4>
        </div>
    );
};

export default Album;
