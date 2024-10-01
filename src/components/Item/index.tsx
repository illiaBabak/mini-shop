import { useDispatch } from 'react-redux';
import { cartAddItem, cartAddPrice, cartDeleteItem, cartSubstracktPrice } from 'src/actions/cartActions';
import { CartItemType, ItemType } from 'src/types/dataTypes';
import { isCartItem } from 'src/utils/guards';

type Props = {
  item: CartItemType | ItemType;
};

export const Item = ({ item }: Props): JSX.Element => {
  const dispatch = useDispatch();
  const isItemInCart = isCartItem(item);

  const handleAddClick = () => {
    dispatch(cartAddPrice(item.price));
    dispatch(cartAddItem(item));
  };

  const handleDeleteClick = () => {
    if (!isItemInCart) return;

    dispatch(cartSubstracktPrice(item.price));

    dispatch(cartDeleteItem(item.itemKey));
  };

  return (
    <div className='item mx-4 my-3 d-flex flex-column align-items-center justify-content-center position-relative'>
      <div
        className='cart position-absolute d-flex justify-content-center align-items-center rounded-circle'
        onClick={() => (isItemInCart ? handleDeleteClick() : handleAddClick())}
      >
        {isItemInCart ? (
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
    </div>
  );
};
