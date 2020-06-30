import React from 'react';
import * as PropTypes from 'prop-types';
import { media } from '../../utils';
import Image from '../image';
import styles from './button.module.scss';

const Button = props => {
  const { icon, title, bgColor, titleColor } = props;

  const buttonClassName = [styles.button];
  const titleClassName = [styles.title];

  bgColor && buttonClassName.push(styles.red);

  titleColor && titleClassName.push(styles.white);

  return (
    <div className={buttonClassName.join(' ')}>
      <div className={styles.icon}>
        <Image src={media(`${icon}.svg`)} alt={"icon"} />
      </div>
      <div className={titleClassName.join(' ')}>{title}</div>
    </div>
  );
};

Button.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
};

Button.defaultProps = {
  icon: "",
  title: "",
};

export default Button;
