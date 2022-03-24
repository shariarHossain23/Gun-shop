import React from 'react';
import './gun.css';

const Guns = ({gun}) => {
    console.log(gun)
    const {name,img,bullet,price} = gun;
    return (
        <div className='gun-card'>
            <div className='gun-img'>
                <img src={img} alt=""></img>
            </div>
            <div className='gun-text'>
            <h2>Name:{name}</h2>
            <p>Bullet:{bullet}</p>
            <p>price:${price}</p>
            </div>
            <button className='btn-sec'>add to cart</button>
        </div>
    );
};

export default Guns;