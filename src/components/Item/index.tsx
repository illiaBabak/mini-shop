import { ItemType } from 'src/types/dataTypes';

type Props = {
  item: ItemType;
};

export const Item = ({ item }: Props): JSX.Element => (
  <div className='item mx-4 my-3 d-flex flex-column align-items-center justify-content-center position-relative'>
    <div className='cart position-absolute d-flex justify-content-center align-items-center rounded-circle'>
      <img src='src/images/cart.png' alt='cart' className='cart-icon object-fit-cover' />
    </div>

    <div className='info mt-4 text-center d-flex justify-content-center flex-column align-items-center w-100'>
      <img className='item-icon object-fit-cover mt-3' src={item.image} alt='item-icon' />
      <h4 className='title mt-4 overflow-hidden w-75'>{item.title}</h4>
      <p className='m-0 mb-1'>${item.price}</p>
    </div>
  </div>
);
