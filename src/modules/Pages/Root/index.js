import React from 'react';
import { renderRoutes } from 'react-router-config';
import Header from '../../Components/Header';
import styles from './index.less';
import { routes } from '../../../routes/app';

const Root = () => (
  <div className={styles.root}>
    <Header />
    {renderRoutes(routes)}
  </div>
)

export default Root;
