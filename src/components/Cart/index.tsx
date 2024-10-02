import { useSelector } from 'react-redux';
import { RootState } from 'src/app/rootReducer';
import { Item } from '../Item';
import { useContext } from 'react';
import { GlobalContext } from 'src/root';
import { useDispatch } from 'react-redux';
import { cartCleanUp } from 'src/actions/cartActions';

export const Cart = (): JSX.Element => {
  const { setShouldShowCart } = useContext(GlobalContext);
  const items = useSelector((state: RootState) => state.cart.items);
  const price = useSelector((state: RootState) => state.cart.price);
  const dispatch = useDispatch();

  return (
    <div
      className='cart d-flex flex-row justify-content-center align-items-center w-75 h-75 p-3'
      onClick={(e) => e.stopPropagation()}
    >
      <div className='items-wrapper d-flex flex-row align-items-start justify-content-center flex-wrap h-100 scroll-container'>
        {items.map((item, index) => (
          <Item key={`cart-${item.id}-${index}`} item={item} />
        ))}
      </div>
      <div className='cart-info d-flex flex-column justify-content-between align-items-center h-100 position-relative'>
        <div
          className='close-btn fw-bolder fs-1 position-absolute d-flex justify-content-center align-items-center'
          onClick={() => setShouldShowCart(false)}
        >
          x
        </div>
        <div className='d-flex flex-column justify-content-center align-items-center'>
          <h1 className='mt-4'>Your cart</h1>
          <p className='mt-2 fs-5'>Price: ${price}</p>
          <p className='fs-5'>Items: {items.map((item) => item.count).reduce((acc, val) => acc + val, 0)}</p>
        </div>
        <div
          onClick={() => dispatch(cartCleanUp())}
          className={`confirm-btn d-flex justify-content-center align-items-center mb-3 p-2 ${!items.length ? 'disabled' : ''}`}
        >
          Confirm purchase
        </div>
      </div>
    </div>
  );
};
