import React, { useEffect, useState } from 'react';
import Guns from '../Gun/Guns';
import './gunshop.css';

const Gunshop = () => {
    const [guns,setGuns] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setGuns(data))
    },[])
    return (
        <div>
            <div className='gun'>
                {
                    guns.map(gun => <Guns key={gun.id} gun={gun}></Guns> )
                }
            </div>
        </div>
    );
};

export default Gunshop;