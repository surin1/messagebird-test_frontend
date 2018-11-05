import React from 'react';
import styles from './index.less';
import Modal from 'react-modal';
import moment from 'moment';

const MessageModal = ({
  body,
  closeModal,
  createdDatetime,
  isModalOpen,
  originator,
  recipients,
  id
}) => {
  const date = moment(createdDatetime).format('MMMM Do YYYY, HH:mm');

  return (
    <Modal isOpen={isModalOpen}
      onRequestClose={closeModal}
      className={styles.modal}
      overlayClassName={styles.overlay}
      contentLabel="Message information">
      <div className={styles.title}>Message information</div>
      <div className={styles.data}>
        <div className={styles.item}>
          <div className={styles.itemTitle}>ID</div>
          <div className={styles.itemData}>{id}</div>
        </div>
        <div className={styles.item}>
          <div className={styles.itemTitle}>Originator</div>
          <div className={styles.itemData}>{originator}</div>
        </div>
        <div className={styles.item}>
          <div className={styles.itemTitle}>Send time</div>
          <div className={styles.itemData}>{date}</div>
        </div>
        <div className={styles.item}>
          <div className={styles.itemTitle}>Message</div>
          <div className={styles.itemData}>{body}</div>
        </div>
        <div className={styles.item}>
          <div className={styles.itemTitle}>Total recipients</div>
          <div className={styles.itemData}>{recipients.totalCount}</div>
        </div>    
      </div>
      <div className={styles.recipients}>
        <table className={styles.recipientTable}>
          <thead>
            <tr>
              <td>Recipient</td>
              <td>Originator</td>
              <td>Status</td>
              <td>Date</td>
            </tr>
          </thead>
          <tbody>
            {recipients.items.map((item, index) =>
              <tr key={index}>
                <td>{item.recipient}</td>
                <td>{item.originator || 'inbox'}</td>
                <td>{item.status}</td>
                <td>{moment(item.statusDatetime).format('MMMM Do YYYY, HH:mm')}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </Modal>
  )
}

export default MessageModal;
