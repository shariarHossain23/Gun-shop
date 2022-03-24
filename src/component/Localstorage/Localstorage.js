import './local.css';
const Localstorage = ({product}) => {
    const {name,img} = product;
    let names = 0;
    return (
        <div className="product">
            <h1>{name}</h1>
            <img src={img} alt = ""></img>
        </div>
    );
};

export default Localstorage;