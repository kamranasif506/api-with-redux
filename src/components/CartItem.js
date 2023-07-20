import { ChevronDown, ChevronUp } from '../icons';
import { removeItem, increase, decrease } from '../features/cart/cartSlice';
import { useDispatch } from 'react-redux';

const CartItem = ({ id, picture, gender, email, name }) => {
  const dispatch = useDispatch();
  return (
    <article className='cart-item'>
      <img src={picture.thumbnail} alt={email} />
      <div>
        <h4>{name.first}</h4>
        <h4 className='item-price'>${gender}</h4>
        <button
          className='remove-btn'
          onClick={() => {
            dispatch(removeItem(id));
          }}
        >
          remove
        </button>
      </div>
      <div>
        
      </div>
    </article>
  );
};
export default CartItem;
