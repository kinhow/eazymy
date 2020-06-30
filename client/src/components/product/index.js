import React from 'react';
import { Link } from 'react-router-dom';
import { Skeleton } from '@material-ui/lab';
import * as PropTypes from 'prop-types';
import Image from '../../components/image';
import { media } from '../../utils';
import styles from './product.module.scss';

const Product = ({ loading, data }) => {
  if (loading === true) {
    return (
      <div className={styles.box}>
        <div className={styles.image}>
          <Skeleton width={118} height={70} />
        </div>

        <Skeleton width={118} height={34} />
        <Skeleton width={118} />
      </div>
    );
  }

  if (data) {
    return (
      <Link to={`/product/${data.id}`}>
        <div className={styles.box}>
          <div className={styles.image}>
            <Image src={media(`items/${data.id}.png`)} alt={"product"} />
          </div>

          <div className={styles.name}>{data.attributes.title}</div>
          <div className={styles.price}>{data.attributes.price}</div>
        </div>
      </Link>
    );
  }
};

Product.propTypes = {
  loading: PropTypes.bool,
  data: PropTypes.object,
};

Product.defaultProps = {
  loading: false,
  data: {},
};

export default Product;
