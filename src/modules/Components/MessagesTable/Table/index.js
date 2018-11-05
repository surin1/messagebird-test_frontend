import React from 'react';
import Item from '../Item';
import styles from './index.less';
import Error from '../Error';

const Table = ({ messages, onToggleCreateModal, error, isError }) => {
  const isOnError = isError || messages.length === 0;

  return (
    <div>
      {!isOnError ?
      <table className={styles.table}>
        <thead>
          <tr className={styles.tableHead}>
            <td>Type</td>
            <td>Recipient</td>
            <td>Originator</td>
            <td>Message</td>
            <td>Status</td>
            <td>Date</td>
          </tr>
        </thead>
        <tbody>
          {messages.map((message) => <Item key={message.id} {...message} />)}
        </tbody>
      </table> :
      <Error error={error}
        onToggleCreateModal={onToggleCreateModal} />}
    </div>
  )
}

export default Table;
