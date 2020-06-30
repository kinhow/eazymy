import { GET_ITEM_LISTS } from './index';

export const get_item_lists = () => {
  return async dispatch => {
    try {
      const response = await fetch('/api/items');
      const lists = await response.json();

      dispatch({
        type: GET_ITEM_LISTS,
        payload: lists.data,
      });
    } catch (ex) {
      dispatch({
        type: GET_ITEM_LISTS,
        payload: [],
      });
    }
  };
};
