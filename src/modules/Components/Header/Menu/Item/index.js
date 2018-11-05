import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router';
import styles from './index.less';


const Item = ({ title, isActive, page = '/', pathname }) => {
  const itemClass = classnames({
    [styles.item]: true,
    [styles.link]: true,
    [styles.acitveItem]: page === pathname
  });

  return (
    <Link className={itemClass} to={page}>{title}</Link>
  )
}

export default Item;
