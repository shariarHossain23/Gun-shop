import React from 'react';
import './gun.css';

const Guns = ({gun}) => {
    console.log(gun)
    const {name,img,bullet,price} = gun;
    return (
        <div>
            <h2>{name}</h2>
            <div>
                <img src={img} alt=""></img>
            </div>
            <p>Bullet:{bullet}</p>
        </div>
    );
};

export default Guns;