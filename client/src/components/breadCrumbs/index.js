import React from 'react';
import * as PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './breadCrumbs.module.scss';

const BreadCrumbs = ({ name }) => {
  return (
    <div className={styles.breadCrumb}>
      <Link to={'/'} className={styles.breadName}>{'Home'}</Link>
      <div className={styles.breadName}>{'>'}</div>
      <div className={styles.breadName}>{'Electronics'}</div>
      <div className={styles.breadName}>{'>'}</div>
      <div className={styles.breadName}>{'Games & Console'}</div>
      <div className={styles.breadName}>{'>'}</div>
      <div className={styles.breadName}>{name}</div>
    </div>
  );
};

BreadCrumbs.propTypes = {
  name: PropTypes.string,
};

BreadCrumbs.defaultProps = {
  name: ""
};

export default BreadCrumbs;