import { GET_ITEM_LISTS } from '../_actions';

const items = (state = {}, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case GET_ITEM_LISTS:
      return {
        ...state,
        list: payload,
      };

    default:
      return state;
  }
}

export default items;
