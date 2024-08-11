import { useState } from 'react'

function ItemCount({ initialValue = 1, stock, onAdd }) {
    const [count, setCount] = useState(initialValue);

    const decrement = () => {
        if (count > 1) {
            setCount(count => count - 1)
        }
    }

    const increment = () => {
        if (count < stock) {
            setCount(count => count + 1)
        }
    }

    return (
        <>
            <div className='row border-top py-2  justify-content-between'>
                <div className='col-auto'>
                    <button className='btn btn-warning' onClick={decrement}>-1</button>
                </div>
                <div className='col-auto'>
                    <h1 className='text-center'>{count}</h1>
                </div>
                <div className='col-auto'>
                    <button className='btn btn-success' onClick={increment}>+1</button>
                </div>
                <div>
                    <button className="btn btn-outline-success" onClick={() => onAdd(count)}>Agregar al Carrito</button>
                </div>
            </div>
        </>
    )
}

export default ItemCount