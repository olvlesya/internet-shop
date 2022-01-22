import React from 'react';
import { useSelector } from 'react-redux';
import { cartItem } from '../../types/cartItem';
import { store } from '../../types/store';
import { cartTotal, itemsSelector } from '../Cart/selectors';
import { ImageWrapper } from '../common/ImageWrapper';
import { ThemeLink } from '../common/ThemeLink';
import { ItemCount } from './ItemCount';
import { RemovePosition } from './RemovePosition';
import {
  EmptyCart,
  CartItemWrapper,
  CartWrapper,
  ItemActions,
  ItemInfoFlex,
  ItemTitle,
  CartTotal,
} from './styledComponents';

export const UserCart = () => {
  const cartItems = useSelector<store, cartItem[]>(itemsSelector);
  const total = useSelector<store, number>(cartTotal);

  return (
    <CartWrapper>
      {cartItems.length === 0 && <EmptyCart>The cart is empty</EmptyCart>}
      {cartItems.map((cartItem) => {
        const { count } = cartItem;
        const { image, id, title, category, price } = cartItem.item;
        return (
          <CartItemWrapper>
            <ItemInfoFlex>
              <ImageWrapper src={image} size="50px" scale={1.2} />
              <div>
                <ItemTitle>
                  {title}{' '}
                  <ThemeLink href={`/details/${id}`}>
                    <i className="fas fa-external-link-alt" />
                  </ThemeLink>
                </ItemTitle>
                <ThemeLink href={`/category/${category}`}>{category}</ThemeLink>
              </div>
            </ItemInfoFlex>
            <div>
              <b>${price}</b>
            </div>
            <div>
              Total: <b>${(price * count).toFixed(2)}</b>
            </div>
            <ItemActions>
              <ItemCount {...cartItem} />
              <RemovePosition itemId={id} />
            </ItemActions>
          </CartItemWrapper>
        );
      })}
      <CartTotal>
        Total: <b>${total.toFixed(2)}</b>
      </CartTotal>
    </CartWrapper>
  );
};
