import React from 'react';

function Producto( {nombre , precio})    {
    return(
        <div className='producto'>
            <h2>{nombre}</h2>
            <p>precio: ${precio}</p>
        </div>
    );
}

export default Producto;