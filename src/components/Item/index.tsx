import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {
  cartAddItem,
  cartAddPrice,
  cartDeleteItem,
  cartRemoveItem,
  cartSubstracktPrice,
} from 'src/actions/cartActions';
import { RootState } from 'src/app/rootReducer';
import { GlobalContext } from 'src/root';
import { ItemType } from 'src/types/dataTypes';

type Props = {
  item: ItemType;
};

export const Item = ({ item }: Props): JSX.Element => {
  const { shouldShowCart } = useContext(GlobalContext);

  const dispatch = useDispatch();
  const isItemInCart = useSelector((state: RootState) => state.cart.items.some((cartItem) => cartItem.id === item.id));
  const itemCount = useSelector(
    (state: RootState) => state.cart.items.find((cartItem) => cartItem.id === item.id)?.count ?? 1
  );

  const handleAddClick = () => {
    dispatch(cartAddPrice(item.price));
    dispatch(cartAddItem(item));
  };

  const handleRemoveItem = () => dispatch(cartRemoveItem(item.id));

  const handleDeleteClick = () => {
    if (itemCount === 1) {
      handleRemoveItem();
      return;
    }

    dispatch(cartSubstracktPrice(item.price));
    dispatch(cartDeleteItem(item.id));
  };

  return (
    <div className='item mx-4 my-3 d-flex flex-column align-items-center justify-content-center position-relative'>
      <div
        className='cart position-absolute d-flex justify-content-center align-items-center rounded-circle'
        onClick={() => (isItemInCart && shouldShowCart ? handleRemoveItem() : handleAddClick())}
      >
        {isItemInCart && shouldShowCart ? (
          <p className='cart-icon d-flex justify-content-center align-items-center m-0 fs-1 fw-bolder'>x</p>
        ) : (
          <img src='src/images/cart.png' alt='cart' className='cart-icon object-fit-cover' />
        )}
      </div>

      <div className='info mt-4 text-center d-flex justify-content-center flex-column align-items-center w-100'>
        <img className='item-icon object-fit-cover mt-3' src={item.image} alt='item-icon' />
        <h4 className='title mt-4 overflow-hidden w-75'>{item.title}</h4>
        <p className='m-0 mb-1'>${item.price}</p>
      </div>

      {!!(isItemInCart && itemCount && itemCount >= 0) && (
        <div className='quantity d-flex flex-row justify-content-center align-items-center position-absolute'>
          <div
            className={`fs-3 content-wrapper ${shouldShowCart && itemCount === 1 ? 'disabled' : ''}`}
            onClick={handleDeleteClick}
          >
            <div className='count-btn'>-</div>
          </div>
          <p className='mx-2 my-0 fs-5'>{itemCount}</p>

          <div className='fs-3 content-wrapper' onClick={handleAddClick}>
            <div className='count-btn'>+</div>
          </div>
        </div>
      )}
    </div>
  );
};
