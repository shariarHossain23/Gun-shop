import { useEffect, useState } from 'react';
import './App.css';
import Guns from './component/Gun/Guns';

function App() {
  const [guns,setGuns] = useState([])
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
  
}

export default App;
