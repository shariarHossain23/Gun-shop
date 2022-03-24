import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import './App.css';
import Guns from './component/Gun/Guns';
import Header from './component/header/Header';
import Localstorage from './component/Localstorage/Localstorage';
import { addTodb, getStoreData } from './utilitis/gundb';

function App() {
  const [guns,setGuns] = useState([])
  const [cart,setCart] = useState([])
  const [modalIsOpen, setIsOpen] = useState(false);
  
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  useEffect(()=>{
    fetch('data.json')
    .then(res => res.json())
    .then(data => setGuns(data))
  },[])
  
  useEffect(()=>{
    const storeData = getStoreData()
    const saveCart = [];
    for (const id in storeData) {
      const addedProduct = guns?.find(gun => gun.id == id);
      if(addedProduct){
        saveCart.push(addedProduct)
      }
    }
    setCart(saveCart)
    
  },[guns])
  const handleCart = (gun) => {
    const newCart = [...cart,gun]
    setCart(newCart)
    addTodb(gun.id)
  }
  const customStyles = {
    content: {
      top: '40%',
      left: '80%',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

    return (
        <div>
          <Header openmodal={openModal}  cart = {cart}></Header>          
            <div className='gun'>
                {
                    guns.map(gun => <Guns key={gun.id} gun={gun} handlecart = {handleCart}>
                    </Guns> )
                }
            </div>
            <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal}>close</button>
        <div className='local-product'>
        {
         cart.map(product => <Localstorage key={product.id} product ={product}></Localstorage>)
        }
        </div>
      </Modal>
        </div>
    );
  
}

export default App;
