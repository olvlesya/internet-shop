import { item } from '../../types/item';

export type cartAddType = {
  type: 'cart/add';
  payload: item;
};
export const cartAdd = (itemToAdd: item): cartAddType => ({
  type: 'cart/add',
  payload: itemToAdd,
});

export type cartRemoveType = {
  type: 'cart/remove';
  payload: number;
};
export const cartRemove = (id: item['id']): cartRemoveType => ({
  type: 'cart/remove',
  payload: id,
});

export type cartRemovePositionType = {
  type: 'cart/remove-position';
  payload: number;
};
export const cartRemovePosition = (id: item['id']): cartRemovePositionType => ({
  type: 'cart/remove-position',
  payload: id,
});
