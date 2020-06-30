import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { get_item_lists } from '../../_actions/items';
import BreadCrumbs from '../../components/breadCrumbs';
import ItemDetails from '../../components/itemDetails';
import styles from './details.module.scss';

const Details = ({ match }) => {
  const dispatch = useDispatch();

  const getItems = () => {
    dispatch(get_item_lists());
  };

  const lists = useSelector(state => state.items.list);

  useEffect(() => {
    getItems();
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {lists.map(item => {
          if (item.id === match.params.id) {
            return (
              <div key={item.id}>
                <BreadCrumbs name={item.attributes.title} />
                <div className={styles.name}>{item.attributes.title}</div>
                <ItemDetails data={item} />
              </div>
            );
          }

          return null;
        })}
      </div>
    </div>
  );
};

export default Details;