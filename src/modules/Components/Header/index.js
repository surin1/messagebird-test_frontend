import React from 'react';
import styles from './index.less';
import Menu from './Menu';

const Header = () => (
  <div className={styles.header}>
    <h1 className={styles.title}>Messages</h1>
    <Menu />
  </div>
)

export default Header;
