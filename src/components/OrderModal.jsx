function OrderModal({ name, description, price, sum, quantity, onIncrease, onDecrease }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>{description}</p>
            <div>
                <button onClick={onDecrease} >-</button>
                <span>{quantity}</span>
                <button onClick={onIncrease}>+</button>
            </div>
            <button>add for € {sum} </button>
        </div>
    );
}

export default OrderModal;