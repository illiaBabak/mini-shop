import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'src/app/rootReducer';
import { GlobalContext } from 'src/root';

export const Header = (): JSX.Element => {
  const { setShouldShowCart } = useContext(GlobalContext);
  const price = useSelector((store: RootState) => store.cart.price);
  const itemsCount = useSelector((store: RootState) => store.cart.items)
    .map((item) => item.count)
    .reduce((acc = 0, val = 0) => acc + val, 0);

  return (
    <div className='header d-flex flex-row align-items-center justify-content-between'>
      <h3 className='fw-bold'>mini shop</h3>
      <div className='d-flex flex-row align-items-center'>
        <p className='price p-0 m-0 fw-bolder me-3'>${price}</p>
        <div
          className='cart position-relative d-flex justify-content-center align-items-center rounded-circle'
          onClick={() => setShouldShowCart(true)}
        >
          <img src='/cart.png' alt='cart' className='cart-icon object-fit-contain' />
          <p className='counter d-flex justify-content-center align-items-center rounded-circle position-absolute m-0 fw-bolder'>
            {itemsCount}
          </p>
        </div>
      </div>
    </div>
  );
};
