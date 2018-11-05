import React from 'react';
import styles from './index.less';
import classnames from 'classnames';

const Preloader = ({ className }) => {
  const preloaderClassName = classnames({
    [styles.preloader]: true,
    [className]: !!className
  });

  return <span className={preloaderClassName}></span>;
}

export default Preloader;
