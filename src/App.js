import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import './App.css';
import Guns from './component/Gun/Guns';
import Header from './component/header/Header';

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

  const handleCart = (gun) => {
    const newCart = [...cart,gun]
    setCart(newCart)
  }
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

    return (
        <div>
          <Header openmodal={openModal} cart = {cart}></Header>          
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
        {
          cart.map((product) =>(
            <h1>{product.name}</h1>
          ))
        }
      </Modal>
        </div>
    );
  
}

export default App;
