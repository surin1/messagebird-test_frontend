import React from 'react';
import styles from './index.less';

const Error = ({ onToggleCreateModal, error }) => (
  <div className={styles.emptyMessage}>
    {Boolean(error) ?
      <div className={styles.errorMessage}>{error}</div> :
      <div>
        <div>There is no messages. You can create new</div>
        <button className={styles.button} onClick={onToggleCreateModal}>Send sms</button>
      </div>}
  </div>
)

export default Error;
