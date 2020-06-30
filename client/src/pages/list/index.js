import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { get_item_lists } from '../../_actions/items';
import Product from '../../components/product';
import styles from './list.module.scss';

const List = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const getItems = () => {
    dispatch(get_item_lists());
    setLoading(false);
  };

  const lists = useSelector(state => state.items.list);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      getItems();
    }, 2000);

    return () => clearTimeout(timer)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  let loadingList = [];
  for (let i = 0; i < 30; i++) {
    loadingList.push(<Product loading={true} key={i} />)
  }

  if (loading) {
    return (
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.title}>Listing</div>

          <div className={styles.product}>
            {loadingList}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.title}>Listing</div>

        <div className={styles.product}>
          {lists.map(item => (
            <Product key={item.id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default List;
